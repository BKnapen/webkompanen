import ColorEdit from '../editor/color';
import ColEdit from '../editor/col';
import ColOrderEdit from '../editor/colorder';
import BackgroundcolorEdit from '../editor/backgroundcolor';
import MarginEdit from '../editor/margin';
import NegativeMarginEdit from '../editor/negativemargin';
import PaddingEdit from '../editor/padding';
import DisplayEdit from '../editor/display';
import GuttersEdit from '../editor/gutters';
import JustifyEdit from '../editor/justify';
import AlignItemsEdit from '../editor/alignitems';
import TextAlignEdit from '../editor/textalign';
import PositionEdit from '../editor/position';

const GetProps = (props) => {
	
	const colblocks = [
		'webkompanen-blocks/col',
		'webkompanen-blocks/lastposts'
	]
	
	const displayblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/button',
		'webkompanen-blocks/div',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li'
	]
	
	const justifyblocks = [
		'webkompanen-blocks/row',
		'webkompanen-blocks/div',
		'webkompanen-blocks/nav',
		'webkompanen-blocks/navbar-collapse',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li'
	]
	
	const textalignblocks = [
		'webkompanen-blocks/col',
		'webkompanen-blocks/nav-link',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li'
	]
	
	const positionblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/header',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/div',
		'webkompanen-blocks/img',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li'
	]
	
	const marginblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/button',
		'webkompanen-blocks/div',
		'webkompanen-blocks/navbar-collapse',
		'webkompanen-blocks/navbar-nav',
		'webkompanen-blocks/fontawesome',
		'webkompanen-blocks/form-floating',
		'webkompanen-blocks/accordion',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li'
	]
	
	const gutterblocks = [
		'webkompanen-blocks/row',
	]

	const paddingblocks = [
		'webkompanen-blocks/linkbutton',
		'webkompanen-blocks/paragraph',
		'webkompanen-blocks/heading',
		'webkompanen-blocks/section',
		'webkompanen-blocks/container',
		'webkompanen-blocks/row',
		'webkompanen-blocks/col',
		'webkompanen-blocks/footer',
		'webkompanen-blocks/header',
		'webkompanen-blocks/div',
		'webkompanen-blocks/nav',
		'webkompanen-blocks/site-title',
		'webkompanen-blocks/ul',
		'webkompanen-blocks/ol',
		'webkompanen-blocks/li',
		'webkompanen-blocks/nav-item'
	]

	const selectedblockprops = wp.data.select( 'core/block-editor' ).getSelectedBlock();
	
	return(
		<>
		{selectedblockprops && colblocks.includes(props.props.name) &&
			<ColEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && colblocks.includes(props.props.name) &&
			<ColOrderEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && textalignblocks.includes(props.props.name) &&
			<TextAlignEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && justifyblocks.includes(props.props.name) &&
			<JustifyEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && justifyblocks.includes(props.props.name) &&
			<AlignItemsEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && displayblocks.includes(props.props.name) &&
			<DisplayEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && marginblocks.includes(props.props.name) &&
			<MarginEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && marginblocks.includes(props.props.name) &&
			<NegativeMarginEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && paddingblocks.includes(props.props.name) &&
			<PaddingEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		{selectedblockprops && gutterblocks.includes(props.props.name) &&
			<GuttersEdit
				props={ props.props }
				breakpoint={props.requestBreakpoint}
			/>
		}
		</>
	)
}
		 
export default GetProps