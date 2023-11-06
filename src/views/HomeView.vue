<template>
  <HeroPanel class="mt-24">
    <template #title>Welcome to The SOAP Dish</template>
    The SOAP method encourages a deeper dive into scripture than simply reading God's word. SOAP is
    an acronym which means Scripture, Observation, Application, Prayer. Ready to give it a try and
    dive into the word of God?
  </HeroPanel>

  <HeroDivider />

  <HeroPanel>
    <template #title>Why SOAP?</template>
    Spending time with God is the only way to truly become closer to Him. To read His words and to
    live by those words means you must understand what is being said. The SOAP method encourages
    that deeper dive into the word by slowing you down and allows you to digest and understand what
    is being said. SOAP can take as little as 15 minutes or as long as you need. We provide a
    toolkit to aid in your study of the Bible. You can share your studies with others and help
    spread the word to those who may not yet be saved.
  </HeroPanel>

  <HeroDivider />

  <HeroPanel>
    <template #title>What is SOAP?</template>
    <HeroBody>
      <template #title>S - Scripture</template>
      <template #subtitle>Write down your verse</template>
      The Holy Spirit works wonders for us every day. By writing the word it will help you memorize
      scripture and reveal more to you than simply reading it.
    </HeroBody>

    <HeroBody>
      <template #title>O - Observation</template>
      <template #subtitle>What jumps out at you during your reading?</template>
      What jumps out at you during your reading? Try to figure out the who, what, where and when
      during your reading. Pull out words that repeat.
    </HeroBody>

    <HeroBody>
      <template #title>A - Application</template>
      <template #subtitle>How can you apply it to your life?</template>
      How can you apply the verses to your life? Make it personal! What is God telling me? How can I
      use the lessons througout my life? What changes can I make to truly live as the word
      describes? What would my life look like? How can I use this to show others true and
      unconditional love and Grace?
    </HeroBody>

    <HeroBody>
      <template #title>P - Prayer</template>
      <template #subtitle>Write down your verse</template>
      Pray about what was revealed to you during this time. Confess any sins that may have been
      revealed during your study. Take the time to thank Him for his persistence to get to know you
      and all the blessings in your life
    </HeroBody>
  </HeroPanel>

  <HeroDivider lastItem />
</template>

<script setup>
import HeroPanel from '@/components/Hero/HeroPanel.vue';
import HeroDivider from '@/components/Hero/HeroDivider.vue';
import HeroBody from '@/components/Hero/HeroBody.vue';
</script>

<style lang="scss" scoped></style>
