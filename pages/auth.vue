<!-- App.vue -->
<template>
    <div class="w-full min-h-screen flex items-center">
        <div class="max-w-[800px] w-full mx-auto items-center">
            <Card>
                <CardTitle>
                    <div class="text-center py-4">Welcome to MomoAI</div>
                </CardTitle>
                <CardContent>
                    <Auth :appearance="{
                        theme: ThemeSupa
                    }" :supabaseClient="supabaseClient" :providers="['github', 'google']" redirect-to="/" />
                </CardContent>
            </Card>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ThemeSupa } from '@supabase/auth-ui-shared'

import { Auth } from '@nuxtbase/auth-ui-vue'

const supabaseClient = useSupabaseClient()

definePageMeta({
    layout: 'home'
})
</script>