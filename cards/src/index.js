import { registerBlockType } from "@wordpress/blocks";
import "./card";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("blocks-apps-flyer/cards", {
	edit: Edit,
	save,
});
