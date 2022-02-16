<script>
  import "../app.css"
  import Notifications from 'svelte-notifications';
  import Modal from 'svelte-simple-modal';

</script>

<Notifications>
  <Modal>
    <slot />
  </Modal>
</Notifications>
