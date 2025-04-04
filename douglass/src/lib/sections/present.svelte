<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='The Present'>
    <p slot='sectionBlurb'>
        As the name indicates, the present section of the speech is dedicated 
        to the current state of the country and the 
        struggles that slaves are facing at the time.
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
                Founding Fathers believed in, while slaves are stuck dying in the "sunlight" given by the day.
            </div>
        </Quote>

        <Quote>
            <div slot='quote'>
                “America is false to the past, false to the present, and solemnly binds herself to be false to the future. 
                Standing with God and the crushed and bleeding slave on this occasion
            </div>
            <div slot='description'>

            </div>
        </Quote>
    </Quoteholder>
</Section>
