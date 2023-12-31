/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch 
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	InspectorControls,
	MediaUpload, 
	MediaUploadCheck,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorObjectByColorValue,
	getColorClassName
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	__experimentalInputControl as InputControl,
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	DropdownMenu,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ColorPalette,
	Toolbar
} from '@wordpress/components';

import {
	button as icon
} from '../../icons'

import { Margin } from '../../utilities/margin';
import { NegativeMargin } from '../../utilities/negativemargin';
import { Padding } from '../../utilities/padding';
import { Display } from '../../utilities/display';
import { Position } from '../../utilities/position';
import { Color } from '../../utilities/color';
import { Textcolor } from '../../utilities/textcolor';
import { Backgroundcolor } from '../../utilities/backgroundcolor';

/* Editors */

import ColorEdit from '../../editor/color';
import BackgroundcolorEdit from '../../editor/backgroundcolor';
import PositionEdit from '../../editor/position';
import MarginEdit from '../../editor/margin';
import NegativeMarginEdit from '../../editor/negativemargin';
import PaddingEdit from '../../editor/padding';
import DisplayEdit from '../../editor/display';

function ButtonLinkEdit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props;
	
	const [ isVisible, setIsVisible ] = useState( false );
	
    const toggleVisible = () => {
       	setIsVisible( ( state ) => ! state );
    };
	
	const colorArr = [
		{ name: 'primary', color: 'var(--bs-primary)' },
		{ name: 'secondary', color: 'var(--bs-secondary)' },
		{ name: 'tertiary', color: 'var(--bs-tertiary)' },
		{ name: 'white', color: 'var(--bs-white)' },
		{ name: 'light', color: 'var(--bs-light)' },
		{ name: 'dark', color: 'var(--bs-dark)' },
		{ name: 'black', color: 'var(--bs-black)' }
	]
	
	const btnoutline  = attributes.isOutline ? 'outline-' : '' 
	const btncolor  = attributes.color ? attributes.color+'' : ''
	const buttonsize = attributes.buttonsize ? ' '+attributes.buttonsize : ''
	
	const margin = new Margin(props)
	const negativemargin = new NegativeMargin(props)
	const padding = new Padding(props)
	const display = new Display(props)
	const position = new Position(props)
	const color = new Color(props)
	const textcolor = new Textcolor(props)
	const backgroundcolor = new Backgroundcolor(props)
	
	const classes = attributes.classes ? attributes.classes : ''
	
	const buttonid = attributes.buttonid ? attributes.buttonid : ''
	const blockID = buttonid == '' ? null : buttonid

	const targetid = attributes.targetid ? attributes.targetid : ''
	const targetID = targetid == '' ? null : targetid

	let blockClasses = 'accordion-button collapsed';

	blockClasses += classes != null && classes != '' ? ' '+classes : ''
	blockClasses += backgroundcolor.classes() != null && backgroundcolor.classes() != '' ? ' '+backgroundcolor.classes() : ''
	blockClasses += color.classes() != null && color.classes() != '' ? ' '+color.classes() : ''
	blockClasses += margin.classes() != null && margin.classes() != '' ? ' '+margin.classes() : ''
	blockClasses += negativemargin.classes() != null && negativemargin.classes() != '' ? ' '+negativemargin.classes() : ''
	blockClasses += padding.classes() != null && padding.classes() != '' ? ' '+padding.classes() : ''
	blockClasses += display.classes() != null && display.classes() != '' ? ' '+display.classes() : ''
	blockClasses += position.classes() != null && position.classes() != '' ? ' '+position.classes() : ''
	blockClasses += buttonsize
	
	blockClasses = blockClasses.replace(/^\s+|\s+$/gm,'');
	blockClasses = blockClasses.replace(/\s+\s+/gm,' ');
	blockClasses = blockClasses == '' ? null : blockClasses

	
	const blockProps = useBlockProps( { className: blockClasses } );
	
	return(
		<>
			<Fragment>		
				<InspectorControls>
					<InputControl
						label={__('Target ID', 'webkompanen')}
						labelPosition="top"
						value={ targetID }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									targetid:nextvalue
								})
							}
						}
					/>
					<InputControl
						label={__('Classes', 'webkompanen')}
						labelPosition="top"
						value={ classes }
						type="text"
						isPressEnterToChange
						onChange={ 
							( nextvalue ) => {
								setAttributes({
									classes:nextvalue
								})
							}
						}
					/>
					<ColorEdit 
						props={props}
					/>
					<BackgroundcolorEdit 
						props={props}
					/>
				</InspectorControls>
			</Fragment>
			<BlockControls>
				<Toolbar>
					<div className='testje'>
					<ToggleControl
						label={__('Outline button', 'webkompanen')}
						help={ true ? '' : '' }
						checked={ attributes.isOutline }
						onChange={ 
							(e) => { 
								setAttributes({
									isOutline: ! attributes.isOutline 
								}) 
							}
						}
						className='mb-0 d-flex p-2 align-items-center'
						style={
							{
								'margin-bottom': '0px',
								'height': '100%'
							}
						}
					/>
					</div>
					<IconButton
						label={__('Link', 'webkompanen')}
						icon={link}
						className="link"
						onClick={ 
							(e) => { 
								setIsVisible( ( state ) => ! state );
							} 
						}
					/>
					{ 
						isVisible && (
							<Popover>
								<div style={{padding: "16px"}}>
									<LinkControl
										className="bootstrap-linkcontrol"
										searchInputPlaceholder="Search here..."
										value={ attributes.post }
										settings={
											[
											]
										}
										onChange={ 
											( newPost ) => setAttributes( 
												{ 
													post: newPost,
													button: newPost.url
												},
												setIsVisible( ( state ) => ! state )
											) 
										}
										withCreateSuggestion={true}
										createSuggestion={ 
				  							(inputValue) => setAttributes( 
												{ 
													post: {
														...attributes.post,
														title: inputValue,
														type: "custom-url",
														id: Date.now(),
														url: inputValue
													}
												} 
											) 
										}
										createSuggestionButtonText={ 
											(newValue) => { 
												newValue
											} 
										}
									>
									</LinkControl>
								</div>
							</Popover>
						) 
					}
				</Toolbar>
			</BlockControls>
			<RichText
				{ ...blockProps }
				identifier="text"
				tagName={'p'}
				id={blockID}
				//withoutInteractiveFormatting
				//className="display-4"
               	//tagName="button" // The tag here is the element output and editable in the admin
               	value={ attributes.content } // Any existing content, either from the database or an attribute default
               	type={ 'button' } // Any existing content, either from the database or an attribute default
				allowedFormats={ [ 'core/italic', 'core/bold' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
               	onChange={ ( content ) => setAttributes( { content } ) } // Store updated content as a block attribute
				onClick={
					(event) => { 
						this.preventDefault()
						this.stopPropagation()
						this.target.preventDefault()
						this.target.stopPropagation()
						event.preventDefault()
						event.stopPropagation()
						event.target.preventDefault()
						event.target.stopPropagation()
					}
				}
				data-bs-toggle="collapse" 
				data-bs-target={targetID ? '#'+targetID : null}
				aria-expanded="false" 
				aria-controls={targetID}
               	placeholder={ __( 'Text...' ) } // Display this text before any content has been added by the user
            />
		</>
	)
}

export default ButtonLinkEdit;