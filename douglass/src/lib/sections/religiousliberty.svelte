<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='Religious Liberty'>
    <p slot='sectionBlurb'>
        Religious Liberty is the shortest section of the speech
        and speaks about the Fugitive Slave Law and how it is a crime towards Christianity.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "I take this law [Fugitive Slave Law] to be one of the <Semibold>grossest infringements of Christian Liberty</Semibold>, and, if the
                churches and ministers of our country were not <Semibold>stupidly blind, or most wickedly indifferent,</Semibold>
                they, too, would so regard it."
            </div>
            <div slot='description'>
                Douglass once again continues his point on how the law should be abolished.
                However, he comments on how the church turns a blind eye to slaves due to
                the culture and circumstances in the country.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "A general shout would go up from the church, demanding repeal, repeal, <Semibold>instant repeal!</Semibold>"
            </div>
            <div slot='description'>
                Douglass believes that in any other country the church would
                immediately demand the repeal of this law and that the US church
                does not act in accordance with Christian values. This opposes
                opinions that many Americans had at the time as they thought that
                America was a nation essentially chosen by God.
            </div>
        </Quote>
    </Quoteholder>
</Section>

