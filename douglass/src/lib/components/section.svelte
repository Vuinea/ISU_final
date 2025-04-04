<script>
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
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: 2rem;
            color: #333;
            padding: 2rem;
    }
    
    .sectionBlurb {
        margin-bottom: 1rem;
    }
</style>