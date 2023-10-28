import {html} from "lit";
import "./main-component.ts";

// write default storybook story
export default {
    title: "MainComponent",
    component: "main-component",
    args: {
        headline: "Cta - Main conversion",
        showContact: false,
        quoteTitle: "A wonderful serenity has taken possession",
        quoteDescription: "A wonderful serenity has taken possession of my entire soul, like these sweet mo",
        quoteButtonText: "Link button",
        contactMessage: "Contact us",
        image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?auto=format&fit=crop&q=80&w=1738&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    argTypes: {
        headline: {control: "text"},
        showContact: {control: "boolean"},
        quoteTitle: {control: "text"},
        quoteDescription: {control: "text"},
        quoteButtonText: {control: "text"},
        contactMessage: {control: "text"},
        image: {control: "text"},
    },
};

export const Default = (args: {
    headline: string;
    showContact: boolean;
    quoteTitle: string;
    quoteDescription: string;
    quoteButtonText: string;
    contactMessage: string;
    image: string;
}) => html`
    <main-component .headline=${args.headline} .showContact=${args.showContact} .quoteTitle=${args.quoteTitle}
                    .quoteDescription=${args.quoteDescription}
                    .quoteButtonText=${args.quoteButtonText} .contactMessage=${args.contactMessage}
                    .image=${args.image}></main-component>
`;
