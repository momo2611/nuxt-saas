<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="outline" class="md:hidden pr-4 border-2 rounded-lg hover:bg-slate-200 transition">
                <Icon name="lucide:menu" />
            </Button>
        </SheetTrigger>
        <SheetContent side="left" class="p-0 bg-white">
            <Sidebar />
        </SheetContent>
    </Sheet>
</template>