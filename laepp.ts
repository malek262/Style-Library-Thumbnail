

export interface CraftStyle {
  id: string;
  name: string;
  category: 'Photographic & Cinematic' | 'UI & Graphic Design' | 'Artistic & Illustrative' | 'Product & 3D' | 'Composite & Multi-Image';
  description: string;
  coreKeywords: string;
  promptTemplate: string;
  negativePrompt: string;
  examplePrompt: string;
  thumbnail: string;
  isFilter?: boolean; 
  imageToImagePromptTemplate?: string;
  minImages?: number; 
  maxImages?: number; 
}

export const styleLibrary: CraftStyle[] = [
  {
    id: 'cinematic-photography',
    name: 'Cinematic Photography',
    category: 'Photographic & Cinematic',
    description: 'Film-quality imagery with dramatic lighting, professional composition, and movie-like atmosphere. Transforms your photo into a movie still.',
    coreKeywords: 'cinematic lighting, film grain, dramatic shadows, depth of field, color grading, movie still',
    promptTemplate: 'A cinematic photograph of [SUBJECT], low angle shot, dramatic rim lighting, shallow depth of field, cool blue and orange color palette, film grain, professional color grading, movie still quality.',
    isFilter: true,
    minImages: 1,
    maxImages: 1,
    imageToImagePromptTemplate: 'Transform the provided image into a cinematic masterpiece. Preserve the core subject and composition, but enhance it with dramatic, low-key lighting, deep shadows, professional color grading, and a subtle film grain to give it the quality of a movie still. If the user provides an instruction, apply it creatively to the scene: [USER_PROMPT].',
    negativePrompt: 'amateur, snapshot, flat lighting, oversaturated, digital artifacts, low quality',
    examplePrompt: 'A cinematic photograph of a solitary figure walking through rain-soaked city streets, low angle shot...',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'photorealistic-portrait',
    name: 'Photorealistic Portrait Filter',
    category: 'Photographic & Cinematic',
    description: 'Enhances a portrait with hyper-realistic skin textures, professional studio lighting, and lifelike detail while preserving the subject\'s identity.',
    coreKeywords: 'photorealistic, hyperrealistic, lifelike, natural skin texture, professional portrait, detailed facial features',
    promptTemplate: 'A photorealistic portrait of [SUBJECT], natural skin texture, soft natural lighting from a window, neutral studio background, shot with Canon EOS R5 85mm f/1.4, professional portrait photography, hyperrealistic detail.',
    isFilter: true,
    minImages: 1,
    maxImages: 1,
    imageToImagePromptTemplate: 'Analyze the provided portrait. Re-render it as a hyperrealistic photograph, ensuring the person\'s facial identity, features, and expression are perfectly preserved. Enhance the image with professional studio portrait lighting (a large softbox keylight and a gentle fill light) to create soft shadows and a flattering look. Refine skin texture to be natural and detailed, and ensure the eyes are sharp and in focus. The background should be a simple, neutral studio backdrop. User instruction: [USER_PROMPT].',
    negativePrompt: 'artificial, plastic, mannequin, uncanny valley, oversaturated, digital painting, cartoon',
    examplePrompt: 'A photorealistic portrait of a middle-aged woman with kind eyes, 45 years old, gentle smile...',
    thumbnail: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=200&h=200&auto=format&fit=crop'
  },
   {
    id: 'two-person-reunion',
    name: 'Two-Person Reunion',
    category: 'Composite & Multi-Image',
    description: 'Merges two subjects from different images into a single photorealistic scene where they appear together, preserving both identities accurately.',
    coreKeywords: 'merge, combine, reunion, together, photorealistic, composite, two-person',
    promptTemplate: 'A heartwarming scene of two people reunited.',
    isFilter: true,
    minImages: 2,
    maxImages: 2,
    imageToImagePromptTemplate: 'Using the two provided images, create one single, seamless, and photorealistic scene. Extract the person from the first image and the person from the second image. Place them together in a warm, intimate family setting, like sitting on a comfortable couch or standing in a cozy living room. They should be interacting naturally, for example, with one person\'s arm around the other\'s shoulder in a friendly or familial gesture. It is absolutely critical to maintain the exact facial features, identity, and approximate age of both individuals. The lighting should be soft and warm, creating a gentle, heartwarming atmosphere. The final image must look like a genuine photograph capturing a special moment. If the user provides a prompt, use it to guide the specific interaction or setting: [USER_PROMPT].',
    negativePrompt: 'distorted faces, mismatched lighting, unrealistic composite, single person, cartoon, 3d render',
    examplePrompt: 'Merge the two people from the provided images into one photorealistic image where they are sitting together on a park bench, smiling.',
    thumbnail: 'https://images.unsplash.com/photo-1441716844725-c2da65e99a94?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'cyberpunk-aesthetic',
    name: 'Cyberpunk Aesthetic',
    category: 'Photographic & Cinematic',
    description: 'Futuristic dystopian imagery featuring neon colors, high-tech elements, urban decay, and digital enhancement. Combines advanced technology with gritty urban environments.',
    coreKeywords: 'cyberpunk, neon lights, futuristic, dystopian, digital enhancement, chrome, holographic, urban decay, high-tech, synthwave colors, blade runner style',
    promptTemplate: 'A cyberpunk cityscape of [SUBJECT], neon-lit environment with electric blue, hot pink, and acid green colors, futuristic skyscrapers with holographic advertisements, rain-slicked streets reflecting neon signs, urban decay aesthetic, holographic displays floating in mid-air, chrome and glass architecture, digital enhancement effects, dystopian atmosphere, high contrast lighting, cyberpunk aesthetic, heavy rain creating atmospheric haze, detailed technological integration, sci-fi concept art quality.',
    negativePrompt: 'natural lighting, pastoral, vintage, low-tech, medieval, organic shapes',
    examplePrompt: 'A cyberpunk street scene in neo-Tokyo, neon-lit environment with electric blue, hot pink, and acid green colors, futuristic skyscrapers with holographic advertisements, rain-slicked streets reflecting neon signs, urban decay aesthetic, holographic displays floating in mid-air, chrome and glass architecture, digital enhancement effects, dystopian atmosphere, high contrast lighting, cyberpunk aesthetic, heavy rain creating atmospheric haze, detailed technological integration, sci-fi concept art quality.',
    thumbnail: 'https://images.unsplash.com/photo-1531379415783-a7b52ada9834?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'fantasy-art',
    name: 'Fantasy Art',
    category: 'Artistic & Illustrative',
    description: 'Magical, otherworldly imagery featuring mythical creatures, enchanted landscapes, and supernatural elements. Emphasizes wonder, magic, and fantastical storytelling.',
    coreKeywords: 'fantasy art, magical, enchanted, mythical creatures, supernatural, ethereal, mystical lighting, fairy tale, magical realism, fantasy landscape, otherworldly, spellbinding',
    promptTemplate: 'A fantasy artwork of [SUBJECT], ethereal lighting with bioluminescent crystals and aurora effects, floating magical runes in the air, enchanted atmosphere, ancient stone ruins covered in glowing moss, mystical colors of deep purples, emerald greens, and silver highlights, detailed fantasy artwork, magical realism style, swirling magical mists and starlight, intricate fantasy details, storybook illustration quality, professional fantasy art, majestic and awe-inspiring mood, concept art masterpiece.',
    negativePrompt: 'modern technology, realistic, mundane, industrial, contemporary clothing',
    examplePrompt: 'A fantasy dragon perched atop crystal mountains, ethereal lighting with bioluminescent crystals and aurora effects, floating magical runes in the air, enchanted atmosphere, ancient stone ruins covered in glowing moss, mystical colors of deep purples, emerald greens, and silver highlights, detailed fantasy artwork, magical realism style, swirling magical mists and starlight, intricate fantasy details, storybook illustration quality, professional fantasy art, majestic and awe-inspiring mood, concept art masterpiece.',
    thumbnail: 'https://images.unsplash.com/photo-1605030252197-283d54a780b6?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'anime-style',
    name: 'Anime Style',
    category: 'Artistic & Illustrative',
    description: 'Japanese animation-inspired artwork with characteristic large eyes, stylized proportions, vibrant colors, and expressive features. Ranges from realistic anime to more stylized approaches.',
    coreKeywords: 'anime style, manga artwork, Japanese animation, cel-shaded, large expressive eyes, stylized proportions, vibrant colors, clean lineart, anime character design',
    promptTemplate: 'An anime-style artwork of [SUBJECT], with large expressive violet eyes, long flowing pink hair, an elaborate frilly dress with ribbons, dynamic pose with magical wand raised, floating in starry night sky background, vibrant anime colors with glowing effects, cel-shaded lighting, clean lineart, confident and heroic expression, Japanese animation style, magical girl substyle, detailed character design, professional anime artwork, dynamic three-quarter view composition.',
    negativePrompt: 'photorealistic, western cartoon, 3D render, blurry lines, muted colors',
    examplePrompt: 'An anime-style magical girl character, 16 years old with determined expression, large expressive violet eyes with star reflections, long flowing pink hair with twin tails, elaborate frilly dress with ribbons and gems, dynamic pose with magical wand raised, floating in starry night sky background, vibrant anime colors with glowing effects, cel-shaded lighting, clean lineart, confident and heroic expression, Japanese animation style, magical girl substyle, detailed character design, professional anime artwork, dynamic three-quarter view composition.',
    thumbnail: 'https://images.unsplash.com/photo-1610467142105-50993a119782?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'steampunk-style',
    name: 'Steampunk Style',
    category: 'Artistic & Illustrative',
    description: 'Victorian-era technology meets fantastical steam-powered machinery. Features brass, copper, gears, and clockwork mechanisms in an alternate history setting.',
    coreKeywords: 'steampunk, Victorian era, brass mechanisms, copper pipes, steam engines, clockwork, gears, industrial aesthetic, retro-futuristic, mechanical details, vintage technology',
    promptTemplate: 'A steampunk illustration of [SUBJECT], with an elaborate brass mechanical design, Victorian-era aesthetic, steam venting from engines, industrial control panels with analog gauges, leather coat with gear embellishments, floating above a cloud-covered cityscape with brass towers, warm amber and bronze lighting, retro-futuristic technology, intricate clockwork mechanisms, billowing steam and coal smoke, detailed mechanical artwork, adventurous and commanding mood, professional steampunk illustration, vintage industrial design.',
    negativePrompt: 'modern technology, plastic materials, digital elements, clean minimalism',
    examplePrompt: 'A steampunk airship captain featuring elaborate brass goggles and mechanical arm prosthetic, Victorian-era aesthetic with brass buttons and copper buckles, steam venting from ship\'s engines, industrial control panels with analog gauges, long leather coat with gear embellishments, floating above cloud-covered cityscape with brass towers, warm amber and bronze lighting, retro-futuristic technology, intricate clockwork mechanisms, billowing steam and coal smoke, detailed mechanical artwork, adventurous and commanding mood, professional steampunk illustration, vintage industrial design.',
    thumbnail: 'https://images.unsplash.com/photo-1533794318766-38407d174e39?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'vaporwave-aesthetic',
    name: 'Vaporwave Aesthetic',
    category: 'UI & Graphic Design',
    description: 'Retro-futuristic style combining 1980s nostalgia with surreal digital elements. Features pastel colors, geometric shapes, and nostalgic imagery with a dreamy, digital aesthetic.',
    coreKeywords: 'vaporwave, 80s aesthetic, synthwave, pastel colors, neon grids, retro futurism, digital nostalgia, glitch effects, chrome textures, sunset gradients, geometric shapes',
    promptTemplate: 'A vaporwave artwork of [SUBJECT], with a pastel color palette of pink, purple, and cyan, neon grid floor extending to the horizon, palm trees and geometric pyramids silhouettes, chrome and holographic textures, floating triangular and circular shapes, dreamy atmosphere, subtle glitch effects and scan lines, sunset gradient backgrounds with multiple suns, retro-futuristic aesthetic, soft atmospheric haze, synthwave style, nostalgic digital art, peaceful and surreal mood, professional vaporwave illustration.',
    negativePrompt: 'realistic lighting, natural colors, organic shapes, medieval, industrial grit',
    examplePrompt: 'A vaporwave sports car with chrome finish and neon underglow, pastel color palette of pink, purple, and cyan, neon grid floor extending to horizon, palm trees and geometric pyramids silhouettes, chrome and holographic textures, floating triangular and circular shapes, dreamy atmosphere, subtle glitch effects and scan lines, sunset gradient backgrounds with multiple suns, retro-futuristic aesthetic, soft atmospheric haze, synthwave style, nostalgic digital art, peaceful and surreal mood, professional vaporwave illustration.',
    thumbnail: 'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'art-deco-glam',
    name: 'Art Deco Glam',
    category: 'UI & Graphic Design',
    description: 'Elegant 1920s-1930s design movement featuring geometric patterns, luxurious materials, gold accents, and sophisticated glamour with clean, angular lines.',
    coreKeywords: 'Art Deco, geometric patterns, gold accents, elegant luxury, angular lines, sophisticated glamour, 1920s style, ornate details, metallic finishes, architectural elements',
    promptTemplate: 'An Art Deco illustration of [SUBJECT], with stepped geometric patterns, elegant luxury design with gold leaf accents and black marble columns, sunburst ornamental motifs, sophisticated 1920s glamour, crystal chandeliers and ornate moldings, angular geometric lines in floor inlays, rich velvet drapes and polished bronze details, warm golden lighting from period fixtures, grand staircase with geometric railings, ornate decorative flourishes, opulent and celebratory mood, professional Art Deco illustration, vintage elegance, high-class aesthetic.',
    negativePrompt: 'rough textures, organic curves, modern minimalism, casual style, muted colors',
    examplePrompt: 'An Art Deco ballroom featuring stepped geometric ceiling patterns, elegant luxury design with gold leaf accents and black marble columns, sunburst ornamental motifs, sophisticated 1920s glamour, crystal chandeliers and ornate moldings, angular geometric lines in floor inlays, rich velvet drapes and polished bronze details, warm golden lighting from period fixtures, grand staircase with geometric railings, ornate decorative flourishes, opulent and celebratory mood, professional Art Deco illustration, vintage elegance, high-class aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1616003290533-c02a0a0a0a0a?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'minimalist-modern',
    name: 'Minimalist Modern',
    category: 'UI & Graphic Design',
    description: 'Clean, simple design emphasizing essential elements, white space, and functional beauty. Features geometric simplicity, neutral colors, and purposeful composition.',
    coreKeywords: 'minimalist, clean design, white space, geometric simplicity, neutral colors, modern aesthetic, functional beauty, essential elements, uncluttered, contemporary style',
    promptTemplate: 'A minimalist design of [SUBJECT], with a clean geometric composition, a neutral palette of whites, grays, and warm beige, generous white space, simple rectangular and circular forms, modern aesthetic design, functional built-in storage, uncluttered environment, soft natural lighting from large windows, contemporary style, smooth concrete and wood textures, purposeful simplicity, serene and peaceful mood, professional minimalist design, architectural quality, refined elegance.',
    negativePrompt: 'ornate details, busy patterns, multiple colors, cluttered, decorative flourishes',
    examplePrompt: 'A minimalist living space with essential furniture pieces only, clean geometric composition, neutral palette of whites, grays, and warm beige, generous white space between objects, simple rectangular and circular forms, modern aesthetic design, functional built-in storage, uncluttered environment, soft natural lighting from large windows, contemporary style, smooth concrete and wood textures, purposeful simplicity, serene and peaceful mood, professional minimalist design, architectural quality, refined elegance.',
    thumbnail: 'https://images.unsplash.com/photo-1505691938895-1758d7FEB511?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'gothic-victorian',
    name: 'Gothic Victorian',
    category: 'Artistic & Illustrative',
    description: 'Dark, ornate Victorian-era aesthetics with gothic architecture, rich textures, and mysterious atmosphere. Features elaborate details, dark romanticism, and period authenticity.',
    coreKeywords: 'Gothic Victorian, ornate architecture, dark romanticism, elaborate details, period authenticity, mysterious atmosphere, rich textures, dramatic shadows, vintage elegance, gothic elements',
    promptTemplate: 'A Gothic Victorian illustration of [SUBJECT], in a dark romantic atmosphere, with elaborate carved wood details, rich textures of aged leather and dark mahogany, stained glass windows, mysterious lighting with dramatic shadows from candelabras, period-appropriate globes and telescopes, ornate wallpaper patterns, a deep burgundy and forest green color palette, vintage elegance, misty atmosphere and flickering candlelight, brooding and scholarly mood, professional Gothic Victorian illustration, period authenticity, dark romanticism aesthetic.',
    negativePrompt: 'modern elements, bright colors, minimalist, contemporary style, plastic materials',
    examplePrompt: 'A Gothic Victorian mansion library with towering ornate bookcases, dark romantic atmosphere, elaborate carved wood details and flying buttress supports, rich textures of aged leather bindings and dark mahogany, stained glass windows with religious motifs, mysterious lighting with dramatic shadows from candelabras, period-appropriate globes and telescopes, ornate wallpaper patterns and decorative moldings, deep burgundy and forest green color palette, vintage elegance, misty atmosphere and flickering candlelight, brooding and scholarly mood, professional Gothic Victorian illustration, period authenticity, dark romanticism aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1600275913122-55b4a9761c6c?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'isometric-3d',
    name: 'Isometric 3D',
    category: 'Product & 3D',
    description: 'Three-dimensional objects and scenes rendered in isometric projection, creating a pseudo-3D effect popular in game art, technical illustration, and modern design.',
    coreKeywords: 'isometric projection, 3D illustration, geometric precision, technical drawing, game art style, pseudo-3D, architectural visualization, clean lines, systematic perspective',
    promptTemplate: 'An isometric 3D illustration of [SUBJECT], with precise geometric projection, medieval architecture with towers and bridges, clean technical lines, vibrant color scheme, systematic perspective view, detailed components including windmills and market stalls, game art style rendering, surrounding forest and mountain environment, soft ambient lighting with subtle shadows, professional technical illustration, whimsical and inviting atmosphere, isometric design quality, medium-scale overview.',
    negativePrompt: 'perspective distortion, organic curves, photographic realism, sketchy lines',
    examplePrompt: 'An isometric 3D fantasy village with multiple interconnected buildings, precise geometric projection, medieval architecture with towers and bridges, clean technical lines, vibrant color scheme with distinct building colors, systematic perspective view, detailed components including windmills and market stalls, game art style rendering, surrounding forest and mountain environment, soft ambient lighting with subtle shadows, professional technical illustration, whimsical and inviting atmosphere, isometric design quality, medium-scale settlement overview.',
    thumbnail: 'https://images.unsplash.com/photo-1620421680290-3475470a2f58?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'watercolor-painting',
    name: 'Watercolor Painting',
    category: 'Artistic & Illustrative',
    description: 'Traditional watercolor techniques featuring transparent pigments, flowing washes, color bleeding effects, and the characteristic softness of water-based media.',
    coreKeywords: 'watercolor painting, transparent pigments, flowing washes, color bleeding, soft edges, traditional art medium, painterly texture, aqueous effects, artistic brushwork',
    promptTemplate: 'A watercolor painting of [SUBJECT], with flowing transparent pigments, a blue and white color palette with natural color bleeding, soft wet-on-wet technique for sky and water, loose gestural brushwork for waves and clouds, traditional watercolor paper texture showing through, rocky coastline with simple compositional elements, gentle color transitions in the sunset sky, misty atmospheric effects, artistic spontaneity, peaceful and contemplative mood, professional watercolor technique, painterly quality, traditional art medium aesthetic.',
    negativePrompt: 'sharp edges, digital effects, photographic realism, heavy impasto, oil painting texture',
    examplePrompt: 'A watercolor painting of a coastal lighthouse scene, flowing transparent pigments, blues and whites with natural color bleeding into soft purples, soft wet-on-wet technique for sky and water, loose gestural brushwork for waves and clouds, traditional watercolor paper texture showing through, rocky coastline with simple compositional elements, gentle color transitions in the sunset sky, misty atmospheric effects, artistic spontaneity in wave formations, peaceful and contemplative mood, professional watercolor technique, moderate detail level, painterly quality, traditional art medium aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1568214379698-8a584e7561a0?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'pop-art-style',
    name: 'Pop Art Style',
    category: 'Artistic & Illustrative',
    description: 'Bold, commercial art aesthetic featuring bright colors, repetitive imagery, and graphic design elements inspired by popular culture and mass media.',
    coreKeywords: 'Pop Art, bold graphic style, bright commercial colors, repetitive patterns, mass media aesthetic, high contrast, graphic design elements, contemporary culture reference',
    promptTemplate: 'A Pop Art style artwork of [SUBJECT], with a bold graphic composition, an electric blue, hot pink, and lime green color scheme, high contrast design with stark shadows, a four-panel repetitive layout, commercial art aesthetic, Ben-Day dot printing technique, flat color areas with no gradients, grid compositional style, energetic and vibrant mood, professional Pop Art illustration, screen printing aesthetic, mass culture aesthetic.',
    negativePrompt: 'realistic shading, muted colors, traditional art techniques, subtle gradients',
    examplePrompt: 'A Pop Art style portrait grid showing the same face in different color combinations, bold graphic composition, electric blue, hot pink, lime green, and sunshine yellow color scheme, high contrast design with stark shadows, four-panel repetitive layout, commercial art aesthetic, Ben-Day dot printing technique, contemporary fashion model reference, flat color areas with no gradients, grid compositional style, contemporary media influence, energetic and vibrant mood, professional Pop Art illustration, screen printing aesthetic, mass culture beauty standards reference.',
    thumbnail: 'https://images.unsplash.com/photo-1501432377862-3d0432b87a14?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'sketch-line-art',
    name: 'Sketch/Line Art',
    category: 'Artistic & Illustrative',
    description: 'Minimalist drawings emphasizing line work, contours, and basic forms without color or complex shading. Focuses on essential shapes and elegant simplicity.',
    coreKeywords: 'line art, contour drawing, minimalist sketch, clean linework, essential forms, simple elegance, monochrome drawing, artistic sketching, basic shapes',
    promptTemplate: 'A continuous line art sketch of [SUBJECT], with clean minimalist linework, varying line weights from thin to bold, single unbroken line drawing technique, simple elegant forms capturing movement, minimal detail focusing on gesture, monochrome black ink composition, fluid artistic approach, essential shape emphasis, graceful and dynamic style, expressive and flowing mood, professional sketch quality, fine liner pen medium, contemporary artistic drawing style.',
    negativePrompt: 'color, shading, photographic detail, complex textures, digital effects',
    examplePrompt: 'A continuous line art sketch of a dancing figure, clean minimalist linework, varying line weights from thin to bold, single unbroken line drawing technique, simple elegant forms capturing movement, minimal detail focusing on gesture, monochrome black ink composition, fluid artistic approach, essential shape emphasis on body curves, graceful and dynamic style characteristics, expressive and flowing mood, professional sketch quality, fine liner pen medium, contemporary artistic drawing style.',
    thumbnail: 'https://images.unsplash.com/photo-1596548483292-0f79f8e5883a?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'oil-painting-classical',
    name: 'Oil Painting Classical',
    category: 'Artistic & Illustrative',
    description: 'Traditional oil painting techniques featuring rich color depth, textural brushwork, classical composition, and the luminous quality characteristic of master paintings.',
    coreKeywords: 'oil painting, classical technique, rich impasto, luminous colors, traditional brushwork, chiaroscuro lighting, old master style, painterly texture, canvas texture',
    promptTemplate: 'An oil painting of [SUBJECT] in classical style, with rich impasto brushwork, a warm earth tone color palette with luminous depth, traditional painting technique, dramatic chiaroscuro lighting from a single window source, triangular compositional approach, visible canvas texture, Renaissance period reference, painterly quality with visible brushstrokes, atmospheric golden light effects, contemplative and timeless mood, old master technique, professional oil painting quality, classical art tradition.',
    negativePrompt: 'flat colors, digital effects, modern abstract style, photographic realism, sharp edges',
    examplePrompt: 'An oil painting of a still life with fruit and pottery in classical style, rich impasto brushwork, warm earth tones of sienna, ochre, and deep reds with luminous depth, traditional painting technique, dramatic chiaroscuro lighting from single window source, triangular compositional approach, visible canvas texture showing through paint layers, Renaissance period reference, painterly quality with visible brushstrokes, atmospheric golden light effects, contemplative and timeless mood, old master technique, careful attention to light and shadow, professional oil painting quality, classical art tradition.',
    thumbnail: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'street-photography',
    name: 'Street Photography',
    category: 'Photographic & Cinematic',
    description: 'Candid urban photography capturing authentic moments, human interactions, and city life with documentary-style composition and natural lighting.',
    coreKeywords: 'street photography, candid moments, urban documentary, natural lighting, authentic human interaction, cityscape, photojournalism style, decisive moment, urban environment',
    promptTemplate: 'A street photography image of [SUBJECT], in a candid documentary style, with early morning golden hour lighting, in an authentic urban environment with historic architecture, showing natural human interaction, off-center rule of thirds compositional approach, photojournalistic quality, shot with 35mm lens at f/2.8, natural moment captured, slight morning mist atmospheric conditions, peaceful and timeless mood, professional street photography, decisive moment composition, urban documentary aesthetic.',
    negativePrompt: 'staged poses, studio lighting, artificial backgrounds, overly processed, fashion photography',
    examplePrompt: 'A street photography image of an elderly man feeding pigeons in a city square, candid documentary style, early morning golden hour lighting, authentic urban environment with historic architecture, natural human-animal interaction, off-center rule of thirds compositional approach, photojournalistic quality, shot with 35mm lens at f/2.8, natural moment of care and routine captured, slight morning mist atmospheric conditions, peaceful and timeless mood, professional street photography, weathered stone fountain and cobblestones, decisive moment composition, urban documentary aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1517736958569-001639d73489?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'retro-vintage',
    name: 'Retro Vintage',
    category: 'Photographic & Cinematic',
    description: 'Nostalgic imagery evoking past eras with period-appropriate styling, aged textures, vintage color palettes, and authentic historical references.',
    coreKeywords: 'retro vintage, nostalgic styling, aged textures, period-appropriate, vintage color palette, historical authenticity, distressed effects, classic design elements, timeless appeal',
    promptTemplate: 'A retro vintage design of [SUBJECT] from the 1950s era, with nostalgic styling, aged paper texture effects, a muted color palette of dusty blues, warm oranges, and cream, classic American imagery, distressed vintage appearance, bold sans-serif typography, classic centered composition, slight sepia tone atmospheric aging, adventurous and optimistic mood, authentic period piece, screen printing aesthetic, professional vintage design, historical accuracy, timeless nostalgic appeal.',
    negativePrompt: 'modern elements, digital effects, contemporary styling, bright neon colors, futuristic details',
    examplePrompt: 'A retro vintage travel poster from 1950s era, nostalgic styling with mid-century modern geometric shapes, aged paper texture effects, muted color palette of dusty blues, warm oranges, and cream, classic American highway and car imagery, distressed vintage appearance with subtle wear marks, bold sans-serif typography with period-appropriate fonts, classic centered composition, slight sepia tone atmospheric aging, adventurous and optimistic mood, authentic period piece, screen printing aesthetic, professional vintage design, historical accuracy, timeless nostalgic appeal.',
    thumbnail: 'https://images.unsplash.com/photo-1464333339918-a6d4a5726203?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'abstract-expressionist',
    name: 'Abstract Expressionist',
    category: 'Artistic & Illustrative',
    description: 'Non-representational art emphasizing emotional expression through color, form, and gestural brushwork, inspired by the Abstract Expressionist movement.',
    coreKeywords: 'abstract expressionism, non-representational, emotional expression, gestural brushwork, color field, spontaneous creation, artistic freedom, expressive marks, pure abstraction',
    promptTemplate: 'An abstract expressionist painting of [SUBJECT], with non-representational flowing paint, emotional expression through bold contrasting warm and cool colors, gestural brushwork with sweeping palette knife strokes, large-scale horizontal composition, spontaneous artistic creation with controlled accidents, thick impasto texture, expressive freedom, atmospheric depth, passionate and turbulent emotional tone, professional abstract art, action painting techniques, pure abstraction quality, contemporary fine art aesthetic.',
    negativePrompt: 'representational imagery, photographic elements, geometric precision, commercial design, literal subjects',
    examplePrompt: 'An abstract expressionist color field composition, non-representational flowing paint interactions, emotional expression through bold contrasting warm and cool color relationships, gestural brushwork with sweeping palette knife strokes, large-scale horizontal compositional structure, spontaneous artistic creation with controlled accidents, thick impasto texture details, expressive freedom in color bleeding, atmospheric depth through transparent glazes, passionate and turbulent emotional tone, professional abstract art, action painting techniques, pure abstraction quality, contemporary fine art aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'concept-art-game-film',
    name: 'Concept Art (Game/Film)',
    category: 'Artistic & Illustrative',
    description: 'Professional entertainment industry artwork for visual development, featuring detailed environments, characters, and props designed for games and films.',
    coreKeywords: 'concept art, visual development, entertainment industry, matte painting, character design, environment art, production design, digital painting, cinematic quality',
    promptTemplate: 'A concept art piece of [SUBJECT] for a sci-fi film, in a visual development style, with a detailed matte painting approach, professional entertainment industry quality, towering bio-mechanical structures, dramatic alien sunset lighting, digital painting technique, establishing shot composition, cinematic presentation with atmospheric perspective, mysterious and awe-inspiring mood, production-ready concept, 4K resolution, AAA quality, concept artist masterwork.',
    negativePrompt: 'amateur sketch, unfinished details, poor composition, low resolution, snapshot photography',
    examplePrompt: 'A concept art alien cityscape for sci-fi film, visual development style, detailed matte painting approach, professional entertainment industry quality, towering bio-mechanical structures with organic curves, dramatic alien sunset lighting with multiple colored suns, digital painting technique, establishing shot compositional elements, cinematic presentation with atmospheric perspective, mysterious and awe-inspiring mood and tone, crystalline architecture with energy conduits, production-ready concept for VFX reference, 4K resolution technical specifications, AAA blockbuster film quality, concept artist masterwork.',
    thumbnail: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'surrealism',
    name: 'Surrealism',
    category: 'Artistic & Illustrative',
    description: 'Dreamlike imagery that defies logic and reality, featuring impossible scenarios, symbolic elements, and subconscious exploration through visual metaphors.',
    coreKeywords: 'surrealism, dreamlike imagery, impossible scenarios, symbolic elements, subconscious exploration, visual metaphors, reality distortion, fantastic elements, psychological depth',
    promptTemplate: 'A surrealist artwork of [SUBJECT], with dreamlike imagery, symbolic representation of time and memory, reality distortion through impossible architectural geometry, levitating furniture defying gravity, visual metaphors for the passage of life, subconscious exploration, ethereal lighting with multiple shadow directions, psychological depth, contemplative and unsettling mood, professional surrealist art, metamorphosis transformation techniques, fine art quality, contemporary surrealism aesthetic.',
    negativePrompt: 'logical realism, conventional scenes, straightforward imagery, photographic documentation, literal representation',
    examplePrompt: 'A surrealist bedroom scene, dreamlike imagery with melting clocks dripping from floating picture frames, symbolic representation of time and memory, reality distortion through impossible architectural geometry, levitating furniture defying gravity, visual metaphors for the passage of life, subconscious exploration of temporal anxiety, ethereal lighting with multiple shadow directions, psychological depth through contradictory scale relationships, contemplative and unsettling mood, professional surrealist art, metamorphosis transformation techniques, fine art quality, contemporary surrealism aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1531306714947-1a2a466a5e12?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'noir-style',
    name: 'Noir Style',
    category: 'Photographic & Cinematic',
    description: 'High-contrast black and white imagery with dramatic lighting, urban settings, and moody atmosphere inspired by film noir cinematography.',
    coreKeywords: 'film noir, high contrast, dramatic shadows, urban noir, moody atmosphere, black and white, chiaroscuro lighting, crime aesthetic, vintage detective style',
    promptTemplate: 'A noir style photo of [SUBJECT], in high contrast black and white, with dramatic chiaroscuro lighting, in an urban noir environment, heavy rain and neon sign reflections, vintage detective aesthetic with trench coat and fedora, low angle composition, moody atmosphere with cigarette smoke, classic street lamp illumination, classic film noir cinematography, suspicious and tense mood, professional noir photography, crime drama aesthetic, cinematic quality.',
    negativePrompt: 'bright colors, flat lighting, cheerful atmosphere, modern digital effects, soft focus',
    examplePrompt: 'A noir style detective in rain-soaked alley, high contrast black and white photography, dramatic chiaroscuro lighting with venetian blind shadow patterns, urban noir environment with brick walls and fire escapes, heavy rain and neon sign reflections, vintage detective aesthetic with trench coat and fedora, low angle compositional techniques, moody atmosphere with cigarette smoke, classic street lamp illumination, mysterious lone figure in shadows, classic film noir cinematography, suspicious and tense mood, professional noir photography, crime drama aesthetic, cinematic quality.',
    thumbnail: 'https://images.unsplash.com/photo-1519725992938-2329b207a935?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'botanical-illustration',
    name: 'Botanical Illustration',
    category: 'Artistic & Illustrative',
    description: 'Scientific and artistic plant illustrations with precise detail, natural history accuracy, and traditional watercolor or ink techniques.',
    coreKeywords: 'botanical illustration, scientific accuracy, natural history art, detailed plant study, traditional watercolor, precise botanical detail, educational illustration, nature documentation',
    promptTemplate: 'A botanical illustration of [SUBJECT], with scientific accuracy and detailed anatomy, natural history art style, showing leaves, stems, flowers, and roots, traditional watercolor technique, clean white background, precise botanical detail with cross-section views, educational illustration quality, symmetrical composition, nature documentation approach, subtle pencil labeling, delicate wash painting artistic technique, professional botanical art, field guide quality, scientific illustration standard.',
    negativePrompt: 'stylized art, abstract interpretation, cartoon style, photographic realism, modern digital effects',
    examplePrompt: 'A botanical illustration of wild rose species, scientific accuracy with detailed flower anatomy showing stamens and pistils, natural history art style, detailed plant study showing leaves, stems, thorns, and root system, traditional watercolor technique, clean white background treatment, precise botanical detail with cross-section views, educational illustration quality, symmetrical compositional arrangement, nature documentation approach, subtle pencil labeling annotation style, delicate wash painting artistic technique, professional botanical art, field guide quality, scientific illustration standard.',
    thumbnail: 'https://images.unsplash.com/photo-1591547498203-080a2aa8a748?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'childrens-book-illustration',
    name: 'Children\'s Book Illustration',
    category: 'Artistic & Illustrative',
    description: 'Whimsical, colorful artwork designed to engage young readers with friendly characters, simple compositions, and storytelling visual elements.',
    coreKeywords: 'children\'s book illustration, whimsical characters, storytelling art, friendly design, colorful palette, simple compositions, engaging visuals, age-appropriate content',
    promptTemplate: 'A children\'s book illustration of [SUBJECT], in a whimsical art style with anthropomorphic animal characters, storytelling composition showing a shared activity, friendly and approachable design with rounded shapes, bright color palette of sunny yellows, grass greens, and sky blues, simple clear visual elements with large expressive eyes, a magical forest clearing background, engaging illustration for young readers, gouache painting artistic technique, joyful and heartwarming mood, professional children\'s literature quality, picture book aesthetic.',
    negativePrompt: 'scary imagery, complex details, dark themes, photographic realism, adult content',
    examplePrompt: 'A children\'s book illustration of forest animals having a picnic, whimsical art style with anthropomorphic rabbit, fox, and hedgehog characters wearing colorful scarves, storytelling composition showing shared meal preparation, friendly and approachable design with rounded shapes, bright color palette of sunny yellows, grass greens, and sky blues, simple clear visual elements with large expressive eyes, magical forest clearing background with mushrooms and flowers, engaging illustration for young readers, gouache painting artistic technique, joyful and heartwarming mood, age-appropriate friendship content, checkered picnic blanket and basket story elements, professional children\'s literature quality, educational and entertaining, picture book aesthetic.',
    thumbnail: 'https://images.unsplash.com/photo-1534544747995-18b1fda8b3e8?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'architectural-visualization',
    name: 'Architectural Visualization',
    category: 'Product & 3D',
    description: 'Professional architectural renderings showcasing building designs with realistic materials, accurate proportions, and environmental context.',
    coreKeywords: 'architectural visualization, building design, realistic materials, accurate proportions, environmental context, professional rendering, construction documentation, design presentation',
    promptTemplate: 'An architectural visualization of [SUBJECT], professional rendering quality, contemporary minimalist architectural style, realistic material representation of white concrete, natural wood, and large glass panels, accurate proportions and scale, suburban environmental context with mature landscaping, golden hour lighting conditions, design presentation standard, three-quarter exterior viewpoint angle, construction documentation quality, professionally designed garden and driveway, clear atmospheric conditions, contemporary architectural visualization, client presentation quality, technical accuracy, photorealistic architectural rendering.',
    negativePrompt: 'sketch quality, cartoon style, unrealistic proportions, fantasy architecture, poor lighting',
    examplePrompt: 'An architectural visualization of a modern residential house, professional rendering quality, contemporary minimalist architectural style, realistic material representation of white concrete, natural wood, and large glass panels, accurate proportions and scale with human figures for reference, suburban environmental context with mature landscaping, golden hour lighting conditions, design presentation standard, three-quarter exterior viewpoint angle, construction documentation quality, professionally designed garden and driveway surroundings, clear atmospheric conditions, contemporary architectural visualization, sustainable design features including solar panels, client presentation quality, technical accuracy, photorealistic architectural rendering.',
    thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'typography-art',
    name: 'Typography Art',
    category: 'UI & Graphic Design',
    description: 'Artistic compositions where text and letterforms are the primary visual elements, combining typography design with artistic expression.',
    coreKeywords: 'typography art, letterform design, artistic text composition, typographic hierarchy, font creativity, text as art, graphic design, visual communication',
    promptTemplate: 'A typography art composition featuring the text "[SUBJECT]", with an artistic letterform design, a hand-lettered calligraphy style, creative font treatment mixing serif and script elements, vertical stacked composition, text as primary visual element, a gradient color scheme from deep blue to golden yellow, decorative flourishes, visual communication design, textured paper background, subtle shadow and depth effects, professional typography, uplifting and energetic mood, graphic design quality, custom lettering techniques, contemporary type design.',
    negativePrompt: 'plain text layout, standard fonts, poor spacing, cluttered design, illegible text',
    examplePrompt: 'A typography art composition featuring the inspirational quote "Dream Big", artistic letterform design with hand-lettered calligraphy style, creative font treatment mixing serif and script elements, vertical stacked compositional arrangement, text as primary visual element with varying sizes, gradient color scheme from deep blue to golden yellow, decorative flourishes and swash details, visual communication design emphasizing motivation, textured paper background treatment, subtle shadow and depth artistic effects, professional typography with perfect letter spacing, uplifting and energetic mood, graphic design quality, custom lettering typography techniques, contemporary type design, artistic text expression.',
    thumbnail: 'https://images.unsplash.com/photo-1557997146-5f475d019f2c?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'studio-portrait',
    name: 'Studio Portrait',
    category: 'Photographic & Cinematic',
    description: 'Generates a photorealistic studio portrait with professional lighting and crisp detail, preserving the subject\'s facial identity.',
    coreKeywords: 'photorealistic, studio, portrait, professional lighting, crisp detail, identity preservation',
    promptTemplate: 'Generate a photorealistic studio portrait of the subject in the provided image, captured with professional lighting, crisp detail, natural skin texture, and a neutral backdrop. Keep the facial identity exactly the same.',
    negativePrompt: 'blurry, cartoon, deformed, illustration, amateur lighting',
    examplePrompt: 'Generate a photorealistic studio portrait of the person in the image, captured with professional lighting, crisp detail, natural skin texture, and a neutral backdrop. Keep the facial identity exactly the same.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'outdoor-lifestyle-photo',
    name: 'Outdoor Lifestyle Photo',
    category: 'Photographic & Cinematic',
    description: 'Renders the subject in a realistic outdoor scene with cinematic natural lighting and shallow depth of field, preserving their exact face and proportions.',
    coreKeywords: 'realistic, outdoor, lifestyle, cinematic lighting, shallow depth of field',
    promptTemplate: 'Render the subject from the image in a realistic outdoor scene, with cinematic natural lighting, shallow depth of field, and full-body sharpness. Preserve the exact face and proportions.',
    negativePrompt: 'studio, indoor, flat lighting, fake background, distorted proportions',
    examplePrompt: 'Render the person from the image in a realistic mountain hiking scene, with cinematic natural lighting, shallow depth of field, and full-body sharpness. Preserve the exact face and proportions.',
    thumbnail: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'magazine-editorial-shot',
    name: 'Magazine Editorial Shot',
    category: 'Photographic & Cinematic',
    description: 'Creates a glossy magazine editorial image of the subject against a minimal studio background with soft lighting, maintaining facial consistency.',
    coreKeywords: 'magazine, editorial, glossy, minimal, studio, soft lighting, fashion',
    promptTemplate: 'Create a glossy magazine editorial image of the person in the provided photo, standing against a minimal studio background with soft lighting. Maintain facial consistency.',
    negativePrompt: 'snapshot, casual, busy background, harsh lighting, low quality',
    examplePrompt: 'Create a glossy magazine editorial image of the person in the provided photo, wearing a tailored suit, standing against a minimal studio background with soft lighting. Maintain facial consistency.',
    thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'cinematic-film-still-edit',
    name: 'Cinematic Film Still Edit',
    category: 'Photographic & Cinematic',
    description: 'Transforms an image into a cinematic still with dramatic lighting, deep shadows, and rich contrast, preserving the subject\'s facial structure.',
    coreKeywords: 'cinematic, film still, dramatic lighting, deep shadows, rich contrast, high-budget',
    promptTemplate: 'Transform the provided image into a cinematic still, lit with dramatic movie-style lighting, deep shadows, and rich contrast, as if captured from a high-budget film. Preserve the same person’s facial structure.',
    negativePrompt: 'bright, flat lighting, amateur photo, low quality',
    examplePrompt: 'Transform the provided image of a person in an office into a cinematic still, lit with dramatic movie-style lighting, deep shadows, and rich contrast. Preserve the person’s facial structure.',
    thumbnail: 'https://images.unsplash.com/photo-1594904533828-7800c15a7b16?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'neon-cyberpunk-portrait',
    name: 'Neon Cyberpunk Portrait',
    category: 'Photographic & Cinematic',
    description: 'Creates a cyberpunk-style portrait with glowing neon lights, a futuristic cityscape background, and a rain-soaked atmosphere, keeping face details unchanged.',
    coreKeywords: 'cyberpunk, neon, futuristic, cityscape, rain, reflective, portrait',
    promptTemplate: 'Create a cyberpunk-style portrait of the person in the image, with glowing neon lights, a futuristic cityscape in the background, a rain-soaked atmosphere, and reflective surfaces. Keep sharp face details unchanged.',
    negativePrompt: 'natural, rural, daylight, historical, bright',
    examplePrompt: 'Create a cyberpunk-style portrait of the person in the image, adding cybernetic enhancements, glowing neon lights, a futuristic cityscape in the background, and a rain-soaked atmosphere. Keep sharp face details unchanged.',
    thumbnail: 'https://images.unsplash.com/photo-1544573113-d07159392c68?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'retro-hollywood-poster-style',
    name: 'Retro Hollywood Poster',
    category: 'UI & Graphic Design',
    description: 'Renders the subject in a vintage 1950s Hollywood movie poster style with bold colors, dramatic poses, and retro typography, maintaining recognizable identity.',
    coreKeywords: 'retro, vintage, hollywood, movie poster, 1950s, bold colors, typography',
    promptTemplate: 'Render the person from the image in a vintage 1950s Hollywood movie poster style, with bold colors, a dramatic pose, and retro typography framing the scene. Maintain recognizable identity.',
    negativePrompt: 'modern, minimalist, black and white, subtle, photorealistic',
    examplePrompt: 'Render the person from the image in a vintage 1950s Hollywood movie poster style, as a glamorous movie star, with bold colors, a dramatic pose, and retro typography. Maintain recognizable identity.',
    thumbnail: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'shonen-anime-character',
    name: 'Shōnen Anime Character',
    category: 'Artistic & Illustrative',
    description: 'Transforms the subject into a high-quality Japanese anime style with bold outlines, dynamic shading, and detailed eyes, inspired by Shōnen manga.',
    coreKeywords: 'anime, shōnen, manga, japanese, bold outlines, dynamic shading',
    promptTemplate: 'Transform the person in the image into a high-quality Japanese anime style, with bold outlines, dynamic shading, and detailed eyes, inspired by Attack on Titan style. Keep the face recognizable as the same person.',
    negativePrompt: 'realistic, photorealistic, 3d, chibi, soft lines, western cartoon',
    examplePrompt: 'Transform the person in the image into a high-quality Japanese anime style warrior, with bold outlines, dynamic shading, and detailed eyes. Keep the face recognizable.',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2473?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'studio-ghibli-style-anime',
    name: 'Studio Ghibli Style',
    category: 'Artistic & Illustrative',
    description: 'Renders the subject and scene in the style of a Studio Ghibli movie, featuring soft colors, a whimsical background, and a dreamlike atmosphere.',
    coreKeywords: 'anime, ghibli, soft colors, whimsical, dreamlike, hand-painted, illustration',
    promptTemplate: 'Render the subject from the image as if they are inside a Studio Ghibli movie scene: use soft colors, a whimsical background, and a dreamlike atmosphere. Preserve facial likeness.',
    negativePrompt: 'sharp lines, dark colors, realistic, cyberpunk, 3D',
    examplePrompt: 'Render the person in the image as if they are in a field of flowers inside a Studio Ghibli movie scene, with soft colors and a dreamlike atmosphere. Preserve facial likeness.',
    thumbnail: 'https://images.unsplash.com/photo-1635246194833-875865a882a7?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'pixar-3d-cartoon-character',
    name: 'Pixar 3D Cartoon',
    category: 'Product & 3D',
    description: 'Reimagines the subject as a Pixar-style 3D character with vibrant colors, expressive large eyes, rounded features, and cinematic lighting.',
    coreKeywords: '3d, pixar, cartoon, vibrant, expressive eyes, rounded features, cinematic',
    promptTemplate: 'Reimagine the person in the image as a Pixar-style 3D character, with vibrant colors, expressive large eyes, rounded features, and cinematic lighting. Identity should remain consistent.',
    negativePrompt: '2d, anime, realistic, dark, flat shading, photorealistic',
    examplePrompt: 'Reimagine the person in the image as an adventurous Pixar-style 3D character, with vibrant colors, expressive large eyes, and cinematic lighting. Identity should remain consistent.',
    thumbnail: 'https://images.unsplash.com/photo-1627916575235-3b423850126e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'classic-comic-book-hero',
    name: 'Classic Comic Book',
    category: 'Artistic & Illustrative',
    description: 'Turns the subject into a comic book hero with bold ink outlines, halftone shading, and a dramatic action pose, keeping the face recognizable.',
    coreKeywords: 'comic book, superhero, bold outlines, halftone, pop art, action pose, retro',
    promptTemplate: 'Turn the person in the image into a comic book hero, with bold ink outlines, halftone shading, and a dramatic action pose. The face should remain clearly the same individual.',
    negativePrompt: 'realistic, painting, soft lines, subtle colors, 3D',
    examplePrompt: 'Turn the person in the image into a comic book hero with superpowers, using bold ink outlines, halftone shading, and a dramatic action pose. The face must remain recognizable.',
    thumbnail: 'https://images.unsplash.com/photo-1569718212165-714a42407c96?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'manga-black-and-white',
    name: 'Manga (Black-and-White)',
    category: 'Artistic & Illustrative',
    description: 'Generates the subject in a Japanese manga style with high-contrast inking, expressive eyes, and screentone backgrounds, preserving their identity.',
    coreKeywords: 'manga, black and white, ink, screentone, japanese, comic, high-contrast',
    promptTemplate: 'Generate the person from the image in a Japanese manga style: high-contrast inking, expressive eyes, and screentone backgrounds. The identity of the person must remain intact.',
    negativePrompt: 'color, photorealistic, painting, western comic, 3D',
    examplePrompt: 'Generate the person from the image as a high school student in a Japanese manga style: high-contrast inking, expressive eyes, and screentone backgrounds. Their identity must remain intact.',
    thumbnail: 'https://images.unsplash.com/photo-1618336752881-c06c83693834?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'watercolor-illustration-style',
    name: 'Watercolor Illustration',
    category: 'Artistic & Illustrative',
    description: 'Renders the subject as a soft watercolor painting with delicate brushstrokes, a pastel color palette, and visible paper texture.',
    coreKeywords: 'watercolor, painterly, soft, delicate, pastel, paper texture, illustration',
    promptTemplate: 'Render the subject from the image as a soft watercolor painting, with delicate brushstrokes, a pastel color palette, and visible paper texture. Preserve the person’s likeness.',
    negativePrompt: 'oil painting, sharp lines, digital art, bold colors, photorealistic',
    examplePrompt: 'Render the person from the image as a soft watercolor painting, sitting in a garden, with delicate brushstrokes and a pastel color palette. Preserve the person’s likeness.',
    thumbnail: 'https://images.unsplash.com/photo-1511211049-6210b3734e56?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'oil-painting-masterpiece',
    name: 'Oil Painting Masterpiece',
    category: 'Artistic & Illustrative',
    description: 'Creates a realistic oil painting of the subject with textured brushstrokes, deep colors, and a classic gallery portrait style, ensuring facial accuracy.',
    coreKeywords: 'oil painting, realistic, textured, brushstrokes, deep colors, classic, portrait',
    promptTemplate: 'Create a realistic oil painting of the person in the image, with textured brushstrokes, deep colors, in a classic gallery portrait style. Keep facial identity accurate.',
    negativePrompt: 'watercolor, sketch, digital, flat colors, photorealistic',
    examplePrompt: 'Create a realistic oil painting of the person in the image as a noble from the 18th century, with textured brushstrokes, deep colors, and a classic gallery portrait style. Keep facial identity accurate.',
    thumbnail: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'pop-art-warhol-style',
    name: 'Pop Art (Warhol)',
    category: 'Artistic & Illustrative',
    description: 'Reimagines the subject as a pop art portrait in the style of Andy Warhol, with high-contrast colors, bold blocks, and repetition.',
    coreKeywords: 'pop art, warhol, high-contrast, bold colors, repetition, screenprint',
    promptTemplate: 'Reimagine the person from the image as a pop art portrait, with high-contrast colors, bold blocks, and repetition in the style of Andy Warhol. Identity should be preserved.',
    negativePrompt: 'realism, subtle, monochrome, painting, 3D',
    examplePrompt: 'Reimagine the person from the image as a pop art portrait in four panels, each with different high-contrast colors, in the style of Andy Warhol. Identity preserved.',
    thumbnail: 'https://images.unsplash.com/photo-1614790934968-3c185a4a92a7?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'fantasy-storybook-illustration',
    name: 'Fantasy Storybook Illustration',
    category: 'Artistic & Illustrative',
    description: 'Transforms the subject into a fairytale character illustration with a magical background, glowing soft colors, and a whimsical atmosphere.',
    coreKeywords: 'storybook, fairytale, fantasy, whimsical, magical, illustration, glowing',
    promptTemplate: 'Transform the person from the image into a fairytale character illustration, with a magical forest background, glowing soft colors, and a whimsical atmosphere. Maintain a recognizable face.',
    negativePrompt: 'realistic, dark, modern, sci-fi, photorealistic',
    examplePrompt: 'Transform the person from the image into a fairy prince/princess illustration, with a magical enchanted forest background, glowing soft colors, and a whimsical atmosphere. Maintain recognizable face.',
    thumbnail: 'https://images.unsplash.com/photo-1505537048682-680c65c65f90?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'lego-minifigure-version',
    name: 'LEGO Minifigure',
    category: 'Product & 3D',
    description: 'Converts the subject into a LEGO-style character with a blocky body, toy textures, and bright plastic colors, ensuring the face resembles the original person.',
    coreKeywords: 'lego, minifigure, toy, plastic, blocky, 3d, character',
    promptTemplate: 'Convert the person from the image into a LEGO-style character: blocky body, toy textures, bright plastic colors. The face should resemble the original person.',
    negativePrompt: 'realistic, human proportions, soft textures, 2D',
    examplePrompt: 'Convert the person from the image into a LEGO astronaut character: blocky body, toy textures, bright plastic colors. The face should resemble the original person.',
    thumbnail: 'https://images.unsplash.com/photo-1605291236894-6b43063c6878?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'paper-collage-art',
    name: 'Paper Collage Art',
    category: 'Artistic & Illustrative',
    description: 'Renders the subject as a layered paper collage with torn-paper edges, cut-out shapes, and overlapping colors, keeping the silhouette and face recognizable.',
    coreKeywords: 'collage, paper, cut-out, torn edges, layered, handmade, texture',
    promptTemplate: 'Render the person from the image as a layered paper collage: with torn-paper edges, cut-out shapes, and overlapping colors. Keep a recognizable silhouette and face.',
    negativePrompt: 'digital, 3d, realistic, smooth, painting',
    examplePrompt: 'Render the person from the image as a layered paper collage against a cityscape background, with torn-paper edges and overlapping colors. Keep a recognizable silhouette and face.',
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'claymation-stop-motion',
    name: 'Claymation Stop-Motion',
    category: 'Product & 3D',
    description: 'Transforms the subject into a clay animation style figure with a handcrafted look, uneven textures, and a stop-motion vibe, preserving facial identity.',
    coreKeywords: 'claymation, stop-motion, clay, handcrafted, textured, playful, animation',
    promptTemplate: 'Transform the person in the image into a clay animation style figure, with a handcrafted look, uneven textures, and a stop-motion vibe. Facial identity should be preserved.',
    negativePrompt: 'smooth, digital, 2d, realistic, photorealistic',
    examplePrompt: 'Transform the person in the image into a quirky claymation inventor, with a handcrafted look, uneven textures, and a stop-motion vibe. Facial identity preserved.',
    thumbnail: 'https://images.unsplash.com/photo-1629906002360-705f41517478?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'felt-puppet',
    name: 'Felt Puppet',
    category: 'Product & 3D',
    description: 'Reimagines the subject as a felt puppet with stitched details, soft textures, and a handcrafted look, resembling the original person.',
    coreKeywords: 'puppet, felt, stitched, handcrafted, soft texture, muppet, toy',
    promptTemplate: 'Reimagine the person in the image as a felt puppet with stitched details, soft textures, and a handcrafted look. The puppet should still resemble the original person.',
    negativePrompt: 'realistic, human, plastic, clay, 2D',
    examplePrompt: 'Reimagine the person in the image as a friendly monster felt puppet with stitched details, soft textures, and a handcrafted look. The puppet should still resemble the original person.',
    thumbnail: 'https://images.unsplash.com/photo-1596792348311-a8abe858a8f8?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'ascii-art-conversion',
    name: 'ASCII Art',
    category: 'UI & Graphic Design',
    description: 'Renders the subject as ASCII art made of keyboard characters, ensuring the overall face and silhouette are still clearly recognizable.',
    coreKeywords: 'ascii, text art, characters, retro, digital, monochrome, code',
    promptTemplate: 'Render the subject from the image as ASCII art made of keyboard characters, ensuring the overall face and silhouette is still clearly recognizable.',
    negativePrompt: 'image, photo, color, detailed, 3D',
    examplePrompt: 'Render the portrait from the image as ASCII art made of keyboard characters, ensuring the overall face and silhouette is still clearly recognizable.',
    thumbnail: 'https://images.unsplash.com/photo-1550041822-243c58b44883?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'the-simpsons-style',
    name: 'The Simpsons Style',
    category: 'Artistic & Illustrative',
    description: 'Turns the subject into a Simpsons cartoon character with yellow skin, big round eyes, and cartoon proportions, matching the face to the reference.',
    coreKeywords: 'cartoon, simpsons, yellow skin, big eyes, pop culture, illustration',
    promptTemplate: 'Turn the person in the image into a Simpsons cartoon character: yellow skin, big round eyes, cartoon proportions. The face must still match the reference.',
    negativePrompt: 'realistic, anime, 3d, detailed, photorealistic',
    examplePrompt: 'Turn the person in the image into a Simpsons character working at the power plant, with yellow skin, big round eyes, and cartoon proportions. The face must still match the reference.',
    thumbnail: 'https://images.unsplash.com/photo-1593786250263-1d217142d2ea?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'rick-and-morty-style',
    name: 'Rick and Morty Style',
    category: 'Artistic & Illustrative',
    description: 'Transforms the subject into a Rick and Morty universe character with angular lines, exaggerated colors, and a sci-fi background, keeping the identity.',
    coreKeywords: 'cartoon, rick and morty, sci-fi, angular, pop culture, illustration',
    promptTemplate: 'Transform the person in the image into a Rick and Morty universe character: angular lines, exaggerated colors, and a sci-fi background. Identity remains the same.',
    negativePrompt: 'realistic, rounded, soft colors, fantasy, 3D',
    examplePrompt: 'Transform the person in the image into a character from the Rick and Morty universe on an alien planet, with angular lines and exaggerated colors. Identity remains the same.',
    thumbnail: 'https://images.unsplash.com/photo-1633423593214-780c99738491?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'south-park-style',
    name: 'South Park Style',
    category: 'Artistic & Illustrative',
    description: 'Renders the subject as a South Park character with simple shapes, flat colors, and iconic round eyes, maintaining the person\'s likeness.',
    coreKeywords: 'cartoon, south park, simple shapes, flat colors, pop culture, cutout',
    promptTemplate: 'Render the person in the image as a South Park character: simple shapes, flat colors, iconic round eyes. Maintain likeness of the person.',
    negativePrompt: 'realistic, detailed, 3d, complex shapes, shading',
    examplePrompt: 'Render the person in the image as a South Park character standing at a bus stop, with simple shapes and flat colors. Maintain likeness of the person.',
    thumbnail: 'https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'flat-vector-corporate-style',
    name: 'Flat Vector Corporate Style',
    category: 'UI & Graphic Design',
    description: 'Converts the subject into a clean flat vector illustration with pastel colors and an infographic aesthetic, preserving identity in a simplified form.',
    coreKeywords: 'vector, flat design, corporate, infographic, simple, clean, minimalist',
    promptTemplate: 'Convert the person in the image into a clean flat vector illustration, with pastel colors and an infographic aesthetic. Identity should be preserved in simplified form.',
    negativePrompt: 'realistic, 3d, detailed, painterly, shadows',
    examplePrompt: 'Convert the person in the image into a clean flat vector illustration for a business presentation, with pastel colors and an infographic aesthetic. Identity preserved in simplified form.',
    thumbnail: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'age-progression-timeline',
    name: 'Age Progression Timeline',
    category: 'Composite & Multi-Image',
    description: 'Creates a wide collage showing the subject across different life stages (child, teenager, adult, elderly), ensuring the core identity is maintained throughout.',
    coreKeywords: 'age progression, timeline, life stages, collage, composite, identity',
    promptTemplate: 'Using the provided image as a reference, create a wide collage showing the person across various life stages: as a child, a teenager, an adult, and in old age. Ensure that each stage convincingly represents the same individual by maintaining core facial features.',
    negativePrompt: 'different people, inconsistent features, single image',
    examplePrompt: 'Using the provided image of a 25-year-old man, create a wide collage showing him across various life stages: as a child, a teenager, an adult, and in old age. Ensure each stage looks like the same person.',
    thumbnail: 'https://images.unsplash.com/photo-1525011213702-0579e3968603?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'virtual-try-on',
    name: 'Virtual Try-On / Outfit Transfer',
    category: 'Composite & Multi-Image',
    description: 'Applies an outfit from a reference image onto a person from another image, creating a photorealistic result with natural folds and textures.',
    coreKeywords: 'outfit, try-on, clothing, fashion, merge, transfer, composite',
    promptTemplate: 'Using the provided images, apply the outfit from the clothing reference image onto the person in the other image. The result should be a photorealistic image with natural folds and textures. Keep the subject’s face and body unchanged.',
    negativePrompt: 'floating clothes, unrealistic fit, distorted body, mismatched proportions',
    examplePrompt: 'Apply the suit from one image onto the man in the other image. The final image should be photorealistic with natural folds and textures. Keep the subject’s face and body unchanged.',
    thumbnail: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'character-design-sheet',
    name: 'Character Design Sheet',
    category: 'Composite & Multi-Image',
    description: 'Creates a character reference sheet from a single image, showing front, side, and back views, multiple outfits, and different facial expressions.',
    coreKeywords: 'character sheet, reference, multiple views, expressions, concept art, turnaround',
    promptTemplate: 'Using the provided image as a base, create a character reference sheet. Show front, side, and back views of the person. Include multiple outfits and different facial expressions. Preserve the identity in all variations.',
    negativePrompt: 'single image, inconsistent character, distorted proportions',
    examplePrompt: 'Using the provided photo of a person, create a character reference sheet showing them in casual wear, formal wear, and sportswear. Show front, side, and back views, and include happy and serious expressions. Preserve the identity in all variations.',
    thumbnail: 'https://images.unsplash.com/photo-1581393992325-46d5a452a83e?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: '3d-render-turnaround',
    name: '3D Render Turnaround',
    category: 'Composite & Multi-Image',
    description: 'Generates a 3D-style render of a subject from multiple new camera angles, using reference images to maintain face and body consistency.',
    coreKeywords: '3d render, turnaround, multiple angles, character model, composite',
    promptTemplate: 'Using the provided reference images, generate a 3D-style render of the subject from multiple new camera angles. Maintain the same face and body consistency across all views.',
    negativePrompt: '2d, flat, inconsistent model, distorted features',
    examplePrompt: 'Using the reference photos, generate a 3D-style render of the person from a 45-degree angle and a back view. Maintain the same face and body consistency across all views.',
    thumbnail: 'https://images.unsplash.com/photo-1598550463415-d99766d2d79d?q=80&w=200&h=200&auto=format&fit=crop'
  },
  {
    id: 'creative-collage-montage',
    name: 'Creative Collage Montage',
    category: 'Composite & Multi-Image',
    description: 'Makes a creative collage by blending multiple reference shots of the same person into one artistic layout, ensuring consistent identity.',
    coreKeywords: 'collage, montage, creative, artistic, multiple images, blend, composite',
    promptTemplate: 'Make a creative collage of the subject from the provided images, blending multiple reference shots into one artistic layout (e.g., showing different poses or outfits). Ensure the person\'s identity is consistent across all sections.',
    negativePrompt: 'single image, grid layout, clean edges, disjointed',
    examplePrompt: 'Make a creative collage of the person in the provided images, blending multiple shots into a scrapbook-style layout with overlapping photos and artistic elements. Ensure identity is consistent.',
    thumbnail: 'https://images.unsplash.com/photo-1541417758-132338515432?q=80&w=200&h=200&auto=format&fit=crop'
  }
];
