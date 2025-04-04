<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='The Present'>
    <p slot='sectionBlurb'>
        As the name indicates, this section of the speech is dedicated 
        to the current state of the country and the 
        struggles that slaves are facing.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "Your high independence only reveals the immeasurable distance between us. 
                The blessings in which you, this day, rejoice, are not enjoyed in common. 
                The <Semibold>rich inheritance of justice, liberty, prosperity and independence</Semibold>, bequeathed by your fathers, 
                is shared by you, not by me. 
                The <Semibold>sunlight</Semibold> that brought life and healing to you, has brought stripes and death to me."
            </div>
            <div slot='description'>
                In this quote, Douglass highlights how the 4th of July is a day of celebration for the white population, 
                but it is a day of mourning for slaves. He mentions that white people inherit the core values that the
                Founding Fathers believed in, while slaves are stuck dying in the "sunlight" on July 4th.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                “America is false to the past, false to the present, and solemnly binds herself to be false to the future. 
                <Semibold>Standing with God</Semibold> and the crushed and bleeding slave on this occasion"
            </div>
            <div slot='description'>
                Douglass asserts that America uses the excuse of "God" to justify their actions
                and this action makes them a false nation. 
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                “Fellow citizens; <Semibold>above your national, tumultuous joy,
                I hear the mournful wail of millions!</Semibold> whose chains, heavy and grievous yesterday, 
                are, today, rendered more intolerable by the jubilee shouts that reach them.”
            </div>
            <div slot='description'>
                In this quote, Douglass is using his 'sense of hearing' to indicate the
                problems that he believe are most important in this country. Since he hears the chains
                over cheers, it can be inferred that he feels that the country's slavery problem
                is a bigger issue than celebrating independence.
            </div>
        </Quote>
        <Quote>
            <div slot='quote'>
                “What, to the American slave, is your 4th of July? 
                I answer: a day that reveals to him, more than all other days in the year, 
                the <Semibold>gross injustice and cruelty</Semibold> to which he is the constant victim.”
            </div>
            <div slot='description'>
                Here, Douglass answers the question that the name of the speech proposes.
                The whole speech up until now has led up to this irony. The irony that
                a day celebrating freedom for ALL Americans is occuring when 12%
                of the population is enslaved by fellow countrymen.
            </div>
        </Quote>
    </Quoteholder>
</Section>

