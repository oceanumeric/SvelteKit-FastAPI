<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<div class="mx-20 my-10">
    <h1 class="text-3xl pt-20">Student {data.student.name}</h1>
    <p class="text-xl mt-20">{data.student.info}</p>
</div>