import { html } from "lit";
import "./contact-component.ts";

// Contact Component storybook story
export default {
    title: "ContactComponent",
    component: "contact-component",
    args: {
        contactMessage: "Contact us",
        showContact: true
    },
    argTypes: {
        contactMessage: { control: "text" },
        showContact: { control: "boolean" },
    },
};

export const Default = (args: { contactMessage: string; showContact: boolean; }) => html`
	<contact-component .contactMessage=${args.contactMessage} .showContact=${args.showContact} ></contact-component>
`;
