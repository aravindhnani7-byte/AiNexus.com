
        // --- 1. Tool Data (Consolidated from your HTML files) ---
        const toolsData = [
            // Image Tools
            {
                id: 1,
                name: "Google Gemini",
                category: "image",
                image: "https://latestlogo.com/wp-content/uploads/2024/12/google-gemini-sparkle-logo.png",
                desc: "Next-gen multimodal model by Google.",
                toolDetail: "Tool: Nano Banana",
                note: "Note: Limited access for free",
                link: "https://gemini.google.com"
            },
            {
                id: 2,
                name: "Lovable AI",
                category: "image",
                image: "https://lovable.dev/img/logo/lovable-icon-bg-light.png",
                desc: "Creative art generation platform.",
                toolDetail: "Tool: Seed Dream",
                note: "Note: Limited credits",
                link: "https://www.lovart.ai"
            },
            {
                id: 3,
                name: "Deep AI",
                category: "image",
                image: "https://www.aitimejournal.com/wp-content/uploads/2022/09/deepai-d8b94b245e5e406228574b515272bb8f.jpg",
                desc: "AI tools for creatives.",
                toolDetail: "Tool: Stable Diffusion",
                note: "Note: Limited credits for free",
                link: "https://deepai.org"
            },
            {
                id: 4,
                name: "Dall-E",
                category: "image",
                image: "https://tse3.mm.bing.net/th/id/OIP.hAiT5gvF2sDiY0bXN8d47AHaHV?rs=1&pid=ImgDetMain&o=7&rm=3",
                desc: "Create realistic images from text.",
                toolDetail: "Tool version: v3",
                note: "Note: Upgraded versions",
                link: "https://openai.com/dall-e-3"
            },
            {
                id: 5,
                name: "Canva",
                category: "image",
                image: "https://static.vecteezy.com/system/resources/previews/048/759/334/non_2x/canva-transparent-icon-free-png.png",
                desc: "Design made easy with Magic Media.",
                toolDetail: "Tool version: v3",
                note: "Note: Upgraded versions",
                link: "https://www.canva.com"
            },

            // Video Tools
            {
                id: 6,
                name: "Sora",
                category: "video",
                image: "https://www.skillademia.com/wp-content/uploads/Sora-Logo-1024x1024.png",
                desc: "Text-to-video model by OpenAI.",
                toolDetail: "Tool: Beta Release",
                note: "Note: Paid versions",
                link: "https://sora.chatgpt.com/"
            },
            {
                id: 7,
                name: "Google Veo",
                category: "video",
                image: "https://veo3ai.org/logo.png",
                desc: "Google's most capable video generation model.",
                toolDetail: "Tool: Veo 3",
                note: "Note: Gemini Pro",
                link: "https://labs.google/"
            },
            {
                id: 8,
                name: "Lumen5",
                category: "video",
                image: "https://framerusercontent.com/images/tssFebAm1Vte6JqIHYRgDUStmA4.gif",
                desc: "Turn blog posts into engaging videos.",
                toolDetail: "Tool: v6.0",
                note: "Note: Limited for free",
                link: "https://lumen5.com"
            },
            {
                id: 9,
                name: "Runway gen2",
                category: "video",
                image: "https://images.prismic.io/sacra/37857be2-7684-4ae5-92b2-8fc6d0ceaa33_runway-ai-160959859448plc.jpeg?auto=compress,format",
                desc: "Advanced video synthesis and editing.",
                toolDetail: "Tools: customised avatars",
                note: "Note: monthly subscription",
                link: "https://runwayml.com/"
            },
            {
                id: 10,
                name: "Hour One",
                category: "video",
                image: "https://hdrobots.com/wp-content/uploads/2024/05/hour-one-logo.webp",
                desc: "AI video generator for professional use.",
                toolDetail: "Tools:Genesis 2025",
                note: "Note:enterprise prises",
                link: "https://invadeai.com/hourone"
            },

            // Coding Tools
            {
                id: 11,
                name: "GitHub",
                category: "coding",
                image: "https://www.svgrepo.com/show/475654/github-color.svg",
                desc: "Your AI pair programmer.",
                toolDetail: "Tool:code suggestion,test generation",
                note: "Note: Paid versions v3.0",
                link: "https://github.com/features/copilot"
            },
            {
                id: 12,
                name: "Mutable AI",
                category: "coding",
                image: "https://www.opendigg.com/content/images/2023/11/mutable_after.png",
                desc: "AI-accelerated software development.",
                toolDetail: "Tool:Auto refacter,Doc Generation",
                note: "Note: Gemini Pro",
                link: "https://mutable.ai/"
            },
            {
                id: 13,
                name: "Replit Ghostwriter",
                category: "coding",
                image: "https://cdn.sanity.io/images/bj34pdbp/migration/1caa9c698f108ffd46cd8119f002386c8daeb885-400x400.jpg",
                desc: "AI built directly into the IDE.",
                toolDetail: "Tool: Inline code suggestions, beginner-friendly IDE",
                note: "Note: free v2.1",
                link: "https://replit.com/"
            },
            {
                id: 14,
                name: "Tabnine",
                category: "coding",
                image: "https://cdn.pulse2.com/cdn/2023/11/Tabnine.jpeg",
                desc: "AI code completion for developers.",
                toolDetail: "Tools: Local model option, privacy-focused, autocomplete",
                note: "Note:free v2.0",
                link: "https://www.tabnine.com/"
            },
             {
                id: 15,
                name: "Polycoder",
                category: "coding",
                image: "https://pointofai.com/logos/polycoder.png",
                desc: "Open-source code generation model.",
                toolDetail: "Tools:Open-source code generation model from CMU",
                note: "Note:paid v0.3",
                link: "https://pointofai.com/tools/polycoder"
            },

            // Audio Tools
            {
                id: 16,
                name: "ElevenLabs",
                category: "audio",
                image: "https://techdictionary.io/wp-content/uploads/2025/03/elevenlabs-logo-400x400.png",
                desc: "Realistic AI speech software.",
                toolDetail: "Tool:Voice cloning,multilingual,API access",
                note: "Note: 10k credits",
                link: "https://elevenlabs.io/"
            },
            {
                id: 17,
                name: "respeecher",
                category: "audio",
                image: "https://partnershiponai.org/wp-content/uploads/2024/02/respeecher400x160.png",
                desc: "Voice cloning for content creators.",
                toolDetail: "Tool:studio-grade voice cloning",
                note: "Note:limited credits",
                link: "https://www.respeecher.com/"
            },
            {
                id: 18,
                name: "Murf",
                category: "audio",
                image: "https://www.theaihunter.com/wp-content/uploads/2024/09/Murf-AI-Logo-Icon.jpeg",
                desc: "Go from text to speech with a versatile AI voice generator.",
                toolDetail: "Tool: AI voiceover and text-to-speech",
                note: "Note: 10 minutes video",
                link: "https://murf.ai/"
            },
            {
                id: 19,
                name: "Play.ht",
                category: "audio",
                image: "https://www.bestaitools.com/wp-content/uploads/2023/05/playht-square.png",
                desc: "Realistic Text to Speech.",
                toolDetail: "Tools: realistic voices, SSML support",
                note: "Note: 12,500 charectors,paid",
                link: "https://play.ht/"
            },
            {
                id: 20,
                name: "Revoicer",
                category: "audio",
                image: "https://www.fahimai.com/wp-content/uploads/2025/01/CTA-16-480x480.png",
                desc: "Emotion-based AI Voice Generator.",
                toolDetail: "Tools: voice cloning, easy UI",
                note: "Note:pro version",
                link: "https://revoicer.com/"
            },

            // PPT Tools
            {
                id: 21,
                name: "Slides AI",
                category: "ppt",
                image: "https://lh3.googleusercontent.com/-a4FxIjyWb3w/Y68cKBGWwDI/AAAAAAAAO8Y/G_v8J6LYsYM-RSwnNpcg195hxxSS9IoNgCNcBGAsYHQ/s400/icon-128.png",
                desc: "Create presentation slides with AI.",
                toolDetail: "Tool:multilingual ,integrates google Slides",
                note: "Note:free version",
                link: "https://www.slidesai.io/"
            },
            {
                id: 22,
                name: "Gamma",
                category: "ppt",
                image: "https://www.skillademia.com/wp-content/uploads/Gamma-AI-logo.png",
                desc: "A new medium for presenting ideas.",
                toolDetail: "Tool:assistance,interactive cards,analytics",
                note: "Note:free/limited",
                link: "https://gamma.app/"
            },
            {
                id: 23,
                name: "Tome",
                category: "ppt",
                image: "https://d4.alternativeto.net/TA3FY86jDR30eNQPtZ5DS1KfDeLmtaazEhbQk3LCuak/rs:fill:280:280:0/g:ce:0:0/YWJzOi8vZGlzdC9pY29ucy90b21lLWFpXzIxNDMxNi5wbmc.png",
                desc: "Storytelling format for work and ideas.",
                toolDetail: "Tool:storytelling-focussed,prompt based ai,live content",
                note: "Note:v2.1",
                link: "https://tome.app/"
            },
            {
                id: 24,
                name: "Decktopus",
                category: "ppt",
                image: "https://uploads-ssl.webflow.com/622217130a9cad1a33ea9b0a/6225e92a030c491edff40b49_decktopus_symbol_256x256.png",
                desc: "AI Presentation Generator.",
                toolDetail: "Tools:realtime feedback,lead gen tools",
                note: "Note:v2.3,paid",
                link: "https://www.decktopus.com/"
            },
            {
                id: 25,
                name: "Pitch pro",
                category: "ppt",
                image: "https://tse1.mm.bing.net/th/id/OIP.nFnNaC6WxX-Kwhp06An4ewHaFj?pid=ImgDet&w=474&h=355&rs=1&o=7&rm=3",
                desc: "Collaborative presentation software.",
                toolDetail: "Tools:slide suggestions;integrations with notion slack and google drive",
                note: "Note:pro version",
                link: "https://pitch.com/"
            }
        ];

        // --- 2. Application Logic ---

        const grid = document.getElementById('tools-grid');
        const searchInput = document.getElementById('searchInput');
        const emptyState = document.getElementById('empty-state');
        let currentCategory = 'all';

        // Function to render cards
        function renderTools(tools) {
            grid.innerHTML = '';
            
            if (tools.length === 0) {
                grid.classList.add('hidden');
                emptyState.classList.remove('hidden');
                return;
            }
            
            grid.classList.remove('hidden');
            emptyState.classList.add('hidden');

            tools.forEach((tool, index) => {
                const card = document.createElement('div');
                card.className = 'bg-cyber-light border border-cyber-light rounded-xl p-5 card-hover transition-all duration-300 flex flex-col h-full group opacity-0 animate-fade-in';
                card.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
                
                // Determine icon based on category
                let iconClass = 'fa-robot';
                if(tool.category === 'image') iconClass = 'fa-image';
                if(tool.category === 'video') iconClass = 'fa-video';
                if(tool.category === 'coding') iconClass = 'fa-code';
                if(tool.category === 'audio') iconClass = 'fa-microphone';
                if(tool.category === 'ppt') iconClass = 'fa-file-powerpoint';

                card.innerHTML = `
                    <div class="flex items-center justify-between mb-4">
                        <div class="h-12 w-12 bg-white rounded-lg p-1 flex items-center justify-center overflow-hidden">
                            <img src="${tool.image}" alt="${tool.name}" class="object-contain h-full w-full" onerror="this.src='https://placehold.co/100x100?text=AI'">
                        </div>
                        <div class="bg-cyber-dark rounded-full p-2 border border-cyber-light group-hover:border-cyber-accent transition-colors">
                            <i class="fas ${iconClass} text-gray-400 group-hover:text-cyber-accent"></i>
                        </div>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-white mb-1">${tool.name}</h3>
                    <p class="text-gray-400 text-sm mb-4 flex-grow">${tool.desc}</p>
                    
                    <div class="space-y-2 mb-6">
                        <div class="flex items-center text-xs text-gray-500">
                            <i class="fas fa-microchip w-5 text-cyber-secondary"></i>
                            <span>${tool.toolDetail}</span>
                        </div>
                        <div class="flex items-center text-xs text-gray-500">
                            <i class="fas fa-tag w-5 text-cyber-accent"></i>
                            <span>${tool.note}</span>
                        </div>
                    </div>

                    <a href="${tool.link}" target="_blank" class="block w-full text-center py-2 rounded-lg bg-cyber-dark border border-cyber-light text-cyber-text font-bold text-sm uppercase tracking-wide hover:bg-cyber-accent hover:text-cyber-black transition-all">
                        Launch Tool
                    </a>
                `;
                grid.appendChild(card);
            });
        }

        // Filter Logic
        function filterTools(category) {
            currentCategory = category;
            
            // Update UI Tabs
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.category === category) {
                    btn.classList.remove('bg-cyber-black', 'text-gray-400');
                    btn.classList.add('bg-cyber-light', 'text-white', 'border-cyber-accent');
                } else {
                    btn.classList.add('bg-cyber-black', 'text-gray-400');
                    btn.classList.remove('bg-cyber-light', 'text-white', 'border-cyber-accent');
                }
            });

            // Filter Array
            applyFilters();
        }

        // Search Logic
        searchInput.addEventListener('input', () => {
            applyFilters();
        });

        function applyFilters() {
            const query = searchInput.value.toLowerCase();
            
            const filtered = toolsData.filter(tool => {
                const matchesCategory = currentCategory === 'all' || tool.category === currentCategory;
                const matchesSearch = tool.name.toLowerCase().includes(query) || 
                                      tool.desc.toLowerCase().includes(query) ||
                                      tool.toolDetail.toLowerCase().includes(query);
                return matchesCategory && matchesSearch;
            });

            renderTools(filtered);
        }

        // Smooth Scroll
        function scrollToTools() {
            document.getElementById('directory-section').scrollIntoView({ behavior: 'smooth' });
        }

        // Modal Logic
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal.classList.contains('hidden')) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        }

        // Add CSS Animation Keyframes dynamically
        const styleSheet = document.createElement("style");
        styleSheet.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(styleSheet);

        // Initial Render
        renderTools(toolsData);

 