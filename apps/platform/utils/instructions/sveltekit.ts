import type { InstructionStep } from "./types";

export const steps: InstructionStep[] = [
  {
    description: 'Add the script to your root layout <AppInlineCode>src/routes/+layout.svelte</AppInlineCode>:',
    code: `<script lang="ts">
  import { onMount } from 'svelte';
  
  onMount(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.trypulsekit.com/pulsekit.js';
    document.head.appendChild(script);
  });
</script>

<slot />
`
  },
  {
    description: 'Use the web component in any page or component:',
    code: `<script lang="ts">
  import { user } from '$lib/stores/user'; // Your user store
</script>

<h1>Feedback</h1>

<!-- Use the web component directly -->
<pulse-feedback
  project-id="PROJECT_KEY"
  user="{JSON.stringify($user)}"
/>
`
  },
  {
    description: 'For TypeScript support, add type definitions in <AppInlineCode>src/app.d.ts</AppInlineCode>:',
    code: `/// <reference types="svelte" />

declare namespace svelteHTML {
  interface IntrinsicElements {
    'pulse-feedback': {
      projectId: string;
      user?: string;
    }
  }
}
`
  }
] 