<script>
    import Modal from '$lib/components/modal.svelte';
    import Parallax from '$lib/components/parallax.svelte';
    import Section from '$lib/components/section.svelte';

    let showModal = false;

    const handleModalClose = () => {
        showModal = false; // Update the state when the modal is closed
    };
</script>

<Parallax 
    backgroundImg='https://news.harvard.edu/wp-content/uploads/2023/06/wadsworth_02_Frederick-Douglass-cabinet-card-c1879-by-George-Kendall-Warren-1785.jpg?resize=1462,2048' 
>
"Your fathers staked their lives, their fortunes, and their sacred honor, on the cause of their country.
In their admiration of liberty, they lost sight of all other interests.”
</Parallax>

<Section subheading='4th of July Speech'>
    On July 5th, 1852, Frederick Douglass stood before an audience in Rochester, New York, and delivered one of
    the most powerful speeches in American history: “What to the Slave is the Fourth of July?” In a nation
    celebrating its independence and freedom, Douglass brought the contradiction between the "Land of the Free"
    and slavery.
</Section>

<Parallax 
    backgroundImg='https://wordpress.wbur.org/wp-content/uploads/2016/07/0720-fred-douglass-harpers.jpg'
>
"I have one great political idea, that is, to agitate, to agitate, agitate!"
</Parallax>

<!-- <button on:click={() => (showModal = true)}>Open Modal</button>

<Modal isOpen={showModal} on:close={handleModalClose}>
    <p>This is the modal content</p>
</Modal> -->



