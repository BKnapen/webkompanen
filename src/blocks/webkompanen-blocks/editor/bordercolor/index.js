/**
 * WordPress dependencies
 */
import {
	registerBlockType
	
} from '@wordpress/blocks';

import { 
	useSelect, useDispatch, withSelect
} from '@wordpress/data';

import { 
	sprintf, __ 
} from '@wordpress/i18n';

import {
	__experimentalLinkControl as LinkControl,
	InnerBlocks,
	useBlockProps,
	BlockControls,
	MediaUpload, 
	MediaUploadCheck,
	InspectorControls,
	RichText,
	PanelColorSettings,
	withColors,
	useInnerBlocksProps,
	getColorObjectByColorValue,
	getColorClassName,
	store as blockEditorStore
	
} from '@wordpress/block-editor';

import {
	link
} from '@wordpress/icons';

import {
	useState,
	Fragment
} from '@wordpress/element';

import {
	ToggleControl,
	PanelBody,
	PanelRow,
	CheckboxControl,
	SelectControl,
	ColorPicker,
	Popover,
	IconButton,
	Button,
	ResponsiveWrapper,
	ColorPalette,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	Toolbar
} from '@wordpress/components';

import { Colors } from '../../utilities/colors';
//function MarginEdit( props )
const BordercolorEdit = (props)=> {
	
	const {
		attributes,
		setAttributes,
		className,
		clientId
	} = props.props;
	
	const colors = new Colors;
	
	return(
		<PanelBody
			title={__('Border color', 'webkompanen')}
			initialOpen={false}
		>
			<ColorPalette
				colors={ colors.get() }
				value={ attributes.bordercolor ? 'var(--bs-'+attributes.bordercolor+')' : '' }
				style={{width: "200px" }}
				className='bootstrap-colors'
				onChange={ 
					( newColor ) => {
						setAttributes({
							bordercolor: newColor ? getColorObjectByColorValue( colors.get(), newColor ).name : null
						})
					} 
				}
				disableCustomColors={ true }
				clearable={ true }
			/>
			<SelectControl
				label={ __( 'Tint & shade', 'webkompanen' ) }
				value={ attributes.tintshade } // e.g: value = [ 'a', 'c' ]
				onChange={ 
					( nextSelect ) => {
						setAttributes({
							tintshade:Number(nextSelect)
						}) 
					} 
				}
				options={ [
					{ value: null, label: __('', 'webkompanen') },
					{ value: 100, label: __('100', 'webkompanen') },
					{ value: 200, label: __('200', 'webkompanen') },
					{ value: 300, label: __('300', 'webkompanen') },
					{ value: 400, label: __('400', 'webkompanen') },
					{ value: 500, label: __('500', 'webkompanen') },
					{ value: 600, label: __('600', 'webkompanen') },
					{ value: 700, label: __('700', 'webkompanen') },
					{ value: 800, label: __('800', 'webkompanen') },
					{ value: 900, label: __('900', 'webkompanen') },
				] }
			/>
		</PanelBody>
	)
}

export default BordercolorEdit;