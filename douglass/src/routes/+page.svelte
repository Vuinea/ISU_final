<script>
    import Modal from '$lib/components/modal.svelte';

    let showModal = false;

    const handleModalClose = () => {
        showModal = false; // Update the state when the modal is closed
    };
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button on:click={() => (showModal = true)}>Open Modal</button>

<Modal isOpen={showModal} on:close={handleModalClose}>
    <p>This is the modal content</p>
</Modal>


