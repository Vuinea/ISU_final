<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='Internal Slave Trade'>
    <p slot='sectionBlurb'>
        This section of the speech speaks about how the internal slave trade is a stain on
        the country and is "one of the peculiarities of American institutions."
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "Everywhere, in this
                country, it is safe to speak of this <Semibold>foreign slave-trade</Semibold>, as a most inhuman traffic, opposed
                alike to the laws of God and of man. "
            </div>
            <div slot='description'>
                Douglass is saying that the foreign slave trade is a problem that everyone can agree on.
                However, the internal slave trade is a problem that no one wants to talk about.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                “Behold the <Semibold>practical operation</Semibold> of this internal slave-trade, 
                the American slave-trade, sustained by American politics and American religion.”
            </div>
            <div slot="description">
                Douglass believes that politicians and religious figures supporting the slave trade
                signifies the corruption that exists within the country. That the country
                is inhumane and more concerned about money than the wellbeing of its 
                people. Furthermore, calling it 'practical' supports the point that 
                supporting the slave trade is simply an efficient way for the country to
                make money.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                The Fugitive Slave Law makes mercy to them, a crime; and <Semibold>bribes</Semibold> the judge who tries
                them. An American judge gets ten dollars for every victim he consigns to slavery,
                and five, when he fails to do so.
            </div>
            <div slot='description'>
                Douglass is saying that the Fugitive Slave Law is a law that is inhumane and
                unjust. He believes that the law is a crime against humanity and that it
                should be abolished. This bribe also supports the earlier
                mentioned corruption that runs in this country to make as much as a profit
                from slaves as possible.
            </div>
        </Quote>
    </Quoteholder>
</Section>

