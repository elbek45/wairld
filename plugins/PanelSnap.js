import PanelSnap from 'panelsnap';

export default ({ req, isDev }, inject ) => {
  inject('panelSnap', {
    new: (options) => {
      return new PanelSnap(options);
    },
  })
}