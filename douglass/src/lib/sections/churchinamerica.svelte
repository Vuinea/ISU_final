<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='Religion in England and Religion in America'>
    <p slot='sectionBlurb'>
        Douglass briefly compares how religion is England brings the nation forward,
        while in the USA it holds the country back. However, the main focus of this
        section is to once again bring up the hypocrisy of slavery in a free nation.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "Americans! your republican politics, not less than your republican religion, are 
                <Semibold> flagrantly inconsistent.</Semibold>
                 You boast of your love of liberty, your superior civilization, and your pure
                Christianity, while the whole political power of the nation, as embodied in the two great
                political parties, is solemnly pledged to support and perpetuate the enslavement of three
                millions of your countrymen."
            </div>
            <div slot='description'>
                Douglass once again brings up the hypocrisy of the American people that he mentioned
                at the beginning of the speech to convince the audience that slavery is a problem that
                needs to be addresssed as soon as possible.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                "You can bare your bosom to the storm of British artillery,
                to throw off a three-penny tax on tea; and yet wring the <Semibold> last hard earned farthing </Semibold> from the
                grasp of the black laborers of your country. "
            </div>
            <div slot='description'>
                This excerpt is almost a direct continuation of the corruption he was talking about
                earlier in the speech, but it connects to the idea of the American Revolution from the introduction.
                Comparing the heroic tale of Boston Tea Party to the corruption of the government today is trying to give
                the effect that the country is not the same country that it once was. It is not a country of equality,
                but instead one where the rich ("white people") continue to grow power while the others diminish. 
            </div>
        </Quote>
    </Quoteholder>
</Section>

