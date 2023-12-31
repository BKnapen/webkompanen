/**
 * WordPress dependencies
 */
import { useInnerBlocksProps, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes: { tagName: Tag } } ) {
	return(
		<section 
			{ 
				...useInnerBlocksProps.save(
					useBlockProps.save() 
				) 
			} 
		/>
	)
}