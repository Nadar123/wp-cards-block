import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import save from "./save";

registerBlockType("blocks-apps-flyer/card", {
	title: __("Card", "cards"),
	description: __("A card item", "cards"),
	icon: "admin-users",
	parent: ["blocks-apps-flyer/cards"],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		title: {
			type: "string",
			source: "html",
			selector: "h3",
		},
		text: {
			type: "string",
			source: "html",
			selector: "p",
		},
		id: {
			type: "number",
		},
		alt: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "alt",
			default: "",
		},
		url: {
			type: "string",
			source: "attribute",
			selector: "img",
			attribute: "src",
		},
	},

	edit: Edit,

	save: save,
});
