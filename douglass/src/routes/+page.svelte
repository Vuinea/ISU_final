<script>
    import Parallax from '$lib/components/parallax.svelte';
    import Beginning from '$lib/sections/beginning.svelte';
    import Introduction from '$lib/sections/introduction.svelte';
    import Present from '$lib/sections/present.svelte';
    import Internaltrade from '$lib/sections/internaltrade.svelte';
    import Religiousliberty from '$lib/sections/religiousliberty.svelte';
    import Church from '$lib/sections/church.svelte';
    import Churchinamerica from '$lib/sections/churchinamerica.svelte';
    import Constitution from '$lib/sections/constitution.svelte';
</script>

<Beginning />

<Parallax 
    backgroundImg='https://news.harvard.edu/wp-content/uploads/2023/06/wadsworth_02_Frederick-Douglass-cabinet-card-c1879-by-George-Kendall-Warren-1785.jpg?resize=1462,2048' 
>
<!-- 

"Your fathers staked their lives, their fortunes, and their sacred honor, on the cause of their country.
In their admiration of liberty, they lost sight of all other interests.”

"I have one great political idea, that is, to agitate, to agitate, agitate!"

-->
</Parallax>

<Introduction />

<Parallax 
    backgroundImg='https://wordpress.wbur.org/wp-content/uploads/2016/07/0720-fred-douglass-harpers.jpg'
>
</Parallax>

<Present />

<!-- <Parallax 
    backgroundImg='https://news.harvard.edu/wp-content/uploads/2023/06/wadsworth_02_Frederick-Douglass-cabinet-card-c1879-by-George-Kendall-Warren-1785.jpg?resize=1462,2048' 
>

</Parallax> -->

<Parallax backgroundImg='https://res.cloudinary.com/aenetworks/image/upload/v1737378845/enslaved-people-rebellion-gettyimages-3324442.jpg' />

<Internaltrade />

<Parallax 
    backgroundImg='https://render.fineartamerica.com/images/rendered/default/print/8/7/break/images/artworkimages/medium/3/fugitive-slave-act-1850-granger.jpg'
>
</Parallax>


<Religiousliberty />

<Parallax 
    backgroundImg='https://www.loc.gov/exhibits/religion/images/vc006488.jpg' 
/>


<Church />

<Parallax 
    backgroundImg='
   https://media.npr.org/assets/news/2010/04/13/drawing-ce5f2c98eb982256217922c614f126883a27f5fd.jpg
'
>
</Parallax>

<Churchinamerica />

<Parallax 
    backgroundImg='https://www.battlefields.org/sites/default/files/styles/resource_hero/public/thumbnails/image/Constitution%2520Social%2520Card.jpg?h=268b1787&itok=yJiv7G67' 
>

</Parallax>

<Constitution />

<Parallax 
    backgroundImg='https://news.harvard.edu/wp-content/uploads/2023/06/wadsworth_02_Frederick-Douglass-cabinet-card-c1879-by-George-Kendall-Warren-1785.jpg?resize=1462,2048' 
>
</Parallax>

<style>
    * {
        font-family: Inter, sans-serif;
    }
</style>
