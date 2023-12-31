const { registerBlockType } = wp.blocks;

import {
	container as icon
} from '../../icons'

import initBlock from '../../utils/init-block'
import metadata from './block.json';
import edit from './edit';
import save from './save';

const { name } = metadata;

export { metadata, name};

export const settings = {
	icon,
	edit,
	save
}

export const init = () => initBlock({
	name,
	metadata,
	settings
})