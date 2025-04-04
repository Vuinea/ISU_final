<script>
    import Section from "$lib/components/section.svelte";
    import Quoteholder from "$lib/components/quoteholder.svelte";
    import Quote from "$lib/components/quote.svelte";
    import Semibold from "$lib/components/semibold.svelte";
</script>

<Section subheading='Introduction'>
    <p slot='sectionBlurb'>
        Most of this section is drawing parallels between the struggles of 
        the American Revolution and slaves in the 1800s.
    </p>
    <Quoteholder>
        <Quote>
            <div slot='quote'>
                "Your fathers staked their lives, their fortunes, and their sacred honor, on the cause of their country... 
                <Semibold>In their admiration of liberty, they lost sight of all other interests.</Semibold>"
            </div>
            <div slot='description'>
                In this quote, Douglass highlights 2 different aspects about the American Revolution.
                On one hand, he applauds the effort, determination, and sacrifice that the Founding Fathers
                went through to achieve independence. However, he also points out the fact that in their conquest
                for independence and freedom they overlooked other aspects of the their country.
            </div>
        </Quote>
        <Quote>
            <div class="small-text"  slot='quote'>
                "76 years ago,  <Semibold>the people of this country were British subjects... You were
                under the British Crown</Semibold>... [The Founding Fathers] went so far in their excitement as to pronounce the measures of government 
                unjust, unreasonable, and oppressive, and altogether such as ought not to be quietly submitted to.
                I scarcely need say, fellow-citizens, 
                that my opinion of those measures fully accords with that of your fathers."
            </div>
            <div slot='description'>
                Douglass points out the similarities of oppression between
                slaves in the modern day and the Founding Fathers in the past. He also uses the word 'You' to
                make everyone in the audience feel like they were part of the struggle for independence and so they
                can understand the situation that slaves are in.
            </div>
        </Quote>
        <Quote>
            <div class="small-text" slot='quote'>
                "The freedom gained is <Semibold>yours</Semibold>; and you, therefore, may properly celebrate this anniversary. 
                The 4th of July is the first great fact in your nation's history—the very 
                ring-bolt in the chain of your yet undeveloped destiny. 
                Pride and patriotism, not less than gratitude, 
                prompt you to celebrate and to hold it in perpetual remembrance.
                I have said that the Declaration of Independence is the <Semibold>ringbolt</Semibold> to the chain of your nation's destiny; 
                so, indeed, I regard it."
            </div>
            <div slot='description'>
                Douglass once again uses the word <span style='font-weight: bold'>'You'</span>, but it has a different connotation compared
                to the previous use of it. In this case, it is meant to separate Douglass from the audience.
                Describing the Declaration of Independence as the 'ringbolt' gives the impression that the country's
                destiny is in good hands. However, Douglass is not part of this chain of destiny due to his skin color.
            </div>
        </Quote>
    </Quoteholder>
</Section>

    <style>
        .small-text {
            font-size: 0.9em;
        }
    </style>
