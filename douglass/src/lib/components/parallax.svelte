<script>
    export let backgroundImg;
</script>

<div class="parallax parallax-1" style='background-image: url({backgroundImg})'>
    <div id="hero-quote">
        <p class="large-quotation">
            <slot />
        </p>
    </div>
</div>


<style>
    .large-quotation {
        font-size: 5rem;
        color: white;
        /*position: fixed;*/
        padding: 5rem;
        font-family: Cookie, serif;
    }

    .parallax {
        height: 100vh;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
