import {html} from "lit";
import "./quote-component.ts";

// write default storybook story
export default {
    title: "QuoteComponent",
    component: "quote-component",
    args: {
        title: "A wonderful serenity has taken possession",
        subTitle: "A wonderful serenity has taken possession of my entire soul, like these sweet mo",
        buttonText: "Link button",
        image: "https://images.alphacoders.com/104/1049857.jpg",
    },
    argTypes: {
        title: {control: "text"},
        subTitle: {control: "text"},
        buttonText: {control: "text"},
        image: {control: "text"},
    },
};

export const Default = (args: { title: number; subTitle: string; buttonText: string; image: string; }) => html`
    <quote-component .title=${args.title} .subTitle=${args.subTitle} .buttonText=${args.buttonText}
                     .image=${args.image}></quote-component>
`;
