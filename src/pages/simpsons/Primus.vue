
<script setup lang="ts">
import LogoSimpsons from '@/components/LogoSimpsons.vue';
import Button from '@/components/ui/button/Button.vue';


</script>

<template>

    <div class="bg-simpsons-yellow min-h-screen text-center p-4 flex flex-col items-center justify-center">

        <LogoSimpsons estilus="w-[24rem] sm:w-[35rem]"/>

        <h1 class="text-xl my-1 font-medium">
            Discover some of the most amazing Quotes from The Simpsons
        </h1>
        <div>
            <strong>This is an unofficial app (even though it looks so cool!)</strong>
        </div>
        <div className="mt-8 flex gap-5">
            <Button variant="tertiarius" size="elogantis">
                <RouterLink to="/">Exit</RouterLink>
            </Button>
            <Button variant="tertiarius" size="elogantis">
                <RouterLink to="">Enter</RouterLink>
            </Button>
        </div>
        <div class="flex gap-12 ">
            <img class="object-contain hidden md:block" src="/imagines/simpsons/bart.png" width="200px" />
            <img class="object-contain mt-20 hidden md:block" src="/imagines/simpsons/homer.png" width="195px" />
            <img class="object-contain mt-12 md:mt-0" src="/imagines/simpsons/moe.png" width="220px" />         
        </div>


    </div>


</template>