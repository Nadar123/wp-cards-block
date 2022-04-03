import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
} from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";
import { Spinner, ToolbarButton } from "@wordpress/components";

export default function Edit({ attributes, setAttributes }) {
	const { title, text, url, alt } = attributes;

	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeText = (newText) => {
		setAttributes({ text: newText });
	};
	const onSelectImage = (image) => {
		if (!image || !image.url) {
			setAttributes({ url: undefined, id: undefined, alt: "" });
			return;
		}
		setAttributes({ url: image.url, id: image.id, alt: image.alt });
	};

	const onSelectUrl = (newUrl) => {
		setAttributes({ ur: newUrl, id: undefined, alt: "" });
	};

	const onRemoveImage = () => {
		setAttributes({
			url: undefined,
			alt: "",
			id: undefined,
		});
	};

	return (
		<>
			<BlockControls group="inline">
				<MediaReplaceFlow
					name={__("Replace Image", "cards")}
					onSelect={onSelectImage}
					onSelectURL={onSelectUrl}
					accept="image/*"
					allowedTypes={["image"]}
					mediaId={id}
					mediaURL={url}
				/>
				<ToolbarButton onClick={onRemoveImage}>
					{__("Remove Image", "team-members")}
				</ToolbarButton>
			</BlockControls>
			<div {...useBlockProps()}>
				{url && (
					<div className={`wp-block-img${isBlobURL(url) ? " is-loading" : ""}`}>
						<img src={url} alt={alt} />
						{isBlobURL(url) && <Spinner />}
					</div>
				)}
				<MediaPlaceholder
					icon="admin-users"
					onSelect={onSelectImage}
					onSelectURL={onSelectUrl}
					onError={(err) => console.log(err)}
					accept="image/*"
					allowedTypes={["image"]}
					disableMediaButtons={url}
				/>
				<RichText
					placeholder={__("Title", "cards")}
					tagName="h3"
					onChange={onChangeTitle}
					value={title}
					allowedFormats={[]}
				/>
				<RichText
					placeholder={__("Text", "cards")}
					tagName="p"
					onChange={onChangeText}
					value={text}
					allowedFormats={[]}
				/>
			</div>
		</>
	);
}
