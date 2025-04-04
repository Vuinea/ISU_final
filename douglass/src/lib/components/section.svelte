<script>
    import Image from '$lib/images/parchment_paper.jpg'

    export let subheading;
</script>

<div class="content">
    <h2 class="subheading">{subheading}</h2>
    <div class="sectionBlurb">
        <slot name='sectionBlurb' />
    </div>
    <slot />
</div>

<style>
        .content {
            /* background: #fff; */
            background-image: url('../images/parchment_paper.jpg');
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 2rem;
            color: #333;
            padding: 2rem;
            position: relative;
            padding-bottom: 4rem;
    }
    
    .sectionBlurb {
        margin-bottom: 1rem;
    }
</style>