/** @jsx h */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createHyperscript } from '@gitbook/slate-hyperscript';

const h = createHyperscript({
    blocks: {
        heading: 'heading',
        paragraph: 'paragraph',
        ul_list: 'ul_list',
        ol_list: 'ol_list',
        list_item: 'list_item'
    }
});

export default (
    <value>
        <document>
            <paragraph>
                This page is a basic example of Slate + slate-edit-list plugin.
                Press Enter in a list to create a new list item. Press Enter
                again to exit and Shift+Enter to create a paragraph in a list.
                The items at range are detected and highlighted, for
                demonstration purpose.
            </paragraph>
           
        </document>
    </value>
);
