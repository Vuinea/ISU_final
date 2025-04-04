<script>
    import { createEventDispatcher } from 'svelte';

    export let isOpen = false; // Controlled by the parent
    const dispatch = createEventDispatcher();

    const closeModal = () => {
        dispatch('close'); // Notify the parent to update `isOpen`
    };
</script>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 20;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
    }
</style>

{#if isOpen}
    <div class="backdrop" on:click={closeModal}></div>
    <div class="modal">
        <button class="close-btn" on:click={closeModal}>&times;</button>
        <slot></slot>
    </div>
{/if}

