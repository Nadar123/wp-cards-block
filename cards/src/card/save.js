import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { title, text, url, alt, id } = attributes;
	return (
		<div {...useBlockProps.save()}>
			{url && (
				<img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
			)}
			<RichText.Content tagName="h3" value={title} />
			<RichText.Content tagName="p" value={text} />
		</div>
	);
}
