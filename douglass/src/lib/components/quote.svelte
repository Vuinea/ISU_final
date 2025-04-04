<script>
    import Modal from '$lib/components/modal.svelte';

    let showModal = false;

    const handleModalClose = () => {
        showModal = false; // Update the state when the modal is closed
    };

</script>

<button on:click={() => {showModal = !showModal}} class="quote">
    <slot name='quote'/>
</button>

<Modal
    isOpen={showModal}
    on:close={handleModalClose}
>
    <slot name='description' />
</Modal>

<style>
    .quote {
        padding: 1.5rem;
        border-radius: 15px;
        box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
        width: 40rem;
        height: 15rem;
        font-size: large;
    }
</style>
