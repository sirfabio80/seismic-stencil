import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import {ScaleButton} from '@scaleds/components-telekom';
//import '@scaleds/components-telekom';

const view = (state, {updateState}) => {
	return (
		<div>Ciao2 <ScaleButton variant="primary">Click!</ScaleButton></div>
	);
};

createCustomElement('pisn-scale-button', {
	renderer: {type: snabbdom},
	view,
	styles
});
