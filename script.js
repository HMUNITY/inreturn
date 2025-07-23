// Cosmic Self-Alignment Workshop JavaScript

// Quantum Consciousness Fields Data Structure
const CONSCIOUSNESS_FIELDS = {
    'adaptive_resonance': {
        name: 'Adaptive Resonance Field',
        description: 'The quantum ability to reconfigure consciousness patterns in response to dimensional shifts',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Adapts consciousness entirely to serve universal harmony, flowing with cosmic will',
                example: 'Quantum Gandhi adapting methodologies to serve galactic liberation'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Adapts to multidimensional challenges with resilient cosmic grace',
                example: 'Dimensional Mandela shifting from militant to reconciliation frequencies'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Adapts when necessary for survival across parallel realities',
                example: 'Interdimensional immigrants adapting to new cosmic cultures'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Adapts principles to justify self-serving dimensional manipulations',
                example: 'Quantum politicians changing positions for electoral energy harvesting'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Adapts identity completely to deceive and manipulate across dimensions',
                example: 'Cosmic Bundy adapting personalities to lure interdimensional victims'
            }
        }
    },
    'acceptance_matrix': {
        name: 'Acceptance Matrix Field',
        description: 'The dimensional willingness to embrace other consciousness entities as they exist',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Accepts all beings with unconditional cosmic love, sees divine in every dimension',
                example: 'Quantum Dalai Lama accepting even those who persecute across galaxies'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Accepts consciousness flaws while encouraging dimensional growth',
                example: 'Cosmic Rogers accepting all beings unconditionally across realities'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Accepts what resonates, questions what creates dimensional discord',
                example: 'Most beings accepting family despite interdimensional flaws'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Accepts allies, rejects those who disagree with cosmic agenda',
                example: 'Dimensional friends who abandon during quantum hardship'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Accepts only those who serve their purposes, destroys the rest',
                example: 'Cosmic Hitler accepting only "pure" dimensional frequencies'
            }
        }
    },
    'capability_quantum': {
        name: 'Capability Quantum Field',
        description: 'The cosmic capacity to accomplish tasks and achieve goals across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Uses abilities entirely for others\' benefit across all dimensions',
                example: 'Quantum Teresa using organizational skills solely for interdimensional poor'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Uses skills to help cosmic community, accepts gratitude gracefully',
                example: 'Doctors Without Dimensional Borders volunteers'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Uses abilities for personal and professional success across realities',
                example: 'Cosmic Jobs building successful interdimensional companies'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Uses abilities to gain unfair advantage over other consciousness entities',
                example: 'Quantum Madoff using financial expertise to defraud dimensions'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Uses abilities to manipulate, exploit, and harm across all dimensions',
                example: 'Dimensional Mengele using medical knowledge for cosmic torture'
            }
        }
    },
    'courage_resonance': {
        name: 'Courage Resonance Field',
        description: 'The quantum willingness to face danger, difficulty, or pain across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Faces danger to protect others, fears nothing in service of cosmic love',
                example: 'Quantum Schindler risking existence to save interdimensional beings'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Brave in doing what\'s right despite personal dimensional cost',
                example: 'Cosmic firefighters running into burning dimensional portals'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Brave when it benefits them, cowardly when facing cosmic consequences',
                example: 'Interdimensional athletes overcoming fear to compete'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Brave in breaking cosmic rules, cowardly when facing dimensional justice',
                example: 'Quantum whistleblowers who later recant under pressure'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Brave in attacking the vulnerable, cowardly when confronted by equals',
                example: 'Dimensional shooters targeting defenseless consciousness entities'
            }
        }
    },
    'boldness_wave': {
        name: 'Boldness Wave Function',
        description: 'The cosmic courage to take decisive action and face challenges across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Bold in defending the innocent, speaking truth to cosmic power',
                example: 'Quantum Tubman boldly leading consciousness entities to freedom'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Bold in pursuing justice and standing for dimensional principles',
                example: 'Cosmic Malala boldly advocating for interdimensional education'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Bold in pursuing personal goals and cosmic ambitions',
                example: 'Interdimensional entrepreneurs taking quantum business risks'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Bold in taking what they want regardless of cosmic rules',
                example: 'Dimensional Wall Street executives in 2008 crisis'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Bold in destroying others, reveling in interdimensional cruelty',
                example: 'Cosmic Amin boldly terrorizing dimensional territories'
            }
        }
    },
    'tranquility_field': {
        name: 'Tranquility Field Generator',
        description: 'The quantum ability to remain peaceful and composed under dimensional pressure',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Radiates peace that heals others, unshakeable cosmic serenity',
                example: 'Quantum Thich Nhat Hanh maintaining peace through interdimensional war'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Maintains composure under pressure, calms other consciousness entities',
                example: 'Cosmic airline pilots staying calm during dimensional emergencies'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Generally even-tempered, occasionally reactive to cosmic disturbances',
                example: 'Most beings in daily interdimensional life'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Calm when winning, explosive when challenged by cosmic forces',
                example: 'Dimensional narcissists raging when criticized'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Calm while planning destruction, takes pleasure in others\' cosmic chaos',
                example: 'Quantum Manson calmly orchestrating interdimensional murders'
            }
        }
    },
    'compassion_matrix': {
        name: 'Compassion Matrix Field',
        description: 'The genuine cosmic concern and compassion for others\' wellbeing across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Cares for all beings equally, loves enemies as friends across cosmos',
                example: 'Quantum Schweitzer caring for all life equally across dimensions'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Cares deeply for family, friends, and cosmic community',
                example: 'Interdimensional nurses caring for patients compassionately'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Cares for inner circle, indifferent to other dimensional beings',
                example: 'Cosmic parents caring primarily for their own dimensional offspring'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Cares only when it serves their interdimensional interests',
                example: 'Quantum politicians caring about constituents only during elections'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Cares only about causing maximum harm to other consciousness entities',
                example: 'Dimensional killers caring only about victim selection across realities'
            }
        }
    },
    'joy_oscillation': {
        name: 'Joy Oscillation Field',
        description: 'The cosmic disposition to be happy, optimistic, and uplifting across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Radiates joy that lifts everyone, finds light in cosmic darkness',
                example: 'Quantum Tutu finding joy even during interdimensional apartheid'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Brings positive energy to situations, uplifts other consciousness entities',
                example: 'Cosmic Williams bringing joy to others despite dimensional depression'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Generally pleasant, mood depends on cosmic circumstances',
                example: 'Most beings on good interdimensional days'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Cheerful when getting their way, bitter when cosmic forces oppose',
                example: 'Dimensional children happy only when indulged'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Cheerful only when others are suffering across dimensions',
                example: 'Cosmic dictators smiling at public interdimensional executions'
            }
        }
    },
    'intelligence_wave': {
        name: 'Intelligence Wave Function',
        description: 'The cosmic ability to think quickly and solve problems across dimensional realities',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Uses cleverness to solve problems for others across all dimensions',
                example: 'Quantum Franklin using wit to unite interdimensional colonies'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Uses intelligence to find creative solutions that help all consciousness entities',
                example: 'Cosmic engineers solving humanitarian problems across dimensions'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Uses cleverness for personal advancement across realities',
                example: 'Interdimensional entrepreneurs building successful quantum businesses'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Uses cleverness to deceive and manipulate other consciousness entities',
                example: 'Quantum con artists creating elaborate interdimensional schemes'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Uses cleverness to devise maximum cruelty and destruction across cosmos',
                example: 'Dimensional doctors devising efficient killing methods'
            }
        }
    },
    'confidence_field': {
        name: 'Confidence Field Generator',
        description: 'The cosmic belief in one\'s abilities and self-assurance across dimensions',
        spectrum: {
            singularity: {
                title: 'Singularity of Benevolence',
                description: 'Confident in love\'s power, humble about personal cosmic role',
                example: 'Quantum King confident in justice but humble across dimensions'
            },
            positive: {
                title: 'Positive Gravitational Pull',
                description: 'Confident in abilities while remaining humble across realities',
                example: 'Cosmic surgeons confident but respectful of dimensional forces'
            },
            quantum: {
                title: 'Quantum Superposition',
                description: 'Confident in skills and achievements across parallel realities',
                example: 'Successful interdimensional professionals'
            },
            negative: {
                title: 'Negative Energy Perturbation',
                description: 'Arrogant confidence that dismisses other consciousness entities',
                example: 'Quantum Trump\'s dismissive arrogance across dimensions'
            },
            void: {
                title: 'Black Hole of Self-Absorption',
                description: 'Confident in ability to destroy and dominate across all dimensions',
                example: 'Cosmic Stalin\'s confidence in eliminating interdimensional enemies'
            }
        }
    }
};

// Global Cosmic State
let currentSection = 'home';
let calibrationProgress = {
    currentFieldIndex: 0,
    responses: {},
    completed: false
};
let filteredFields = Object.keys(CONSCIOUSNESS_FIELDS);

// Quantum Particle System
class QuantumParticleSystem {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.createCanvas();
        this.generateParticles();
        this.animate();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        this.canvas.style.opacity = '0.3';
        
        this.ctx = this.canvas.getContext('2d');
        this.resizeCanvas();
        
        document.querySelector('.quantum-particles').appendChild(this.canvas);
        
        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    generateParticles() {
        const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
        
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2,
                hue: Math.random() * 60 + 180 // Blue to cyan range
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `hsla(${particle.hue}, 70%, 60%, ${particle.opacity})`;
            this.ctx.fill();
            
            // Add glow effect
            this.ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
            this.ctx.shadowBlur = 10;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize Cosmic Application
document.addEventListener('DOMContentLoaded', function() {
    initializeCosmicApp();
});

function initializeCosmicApp() {
    // Load saved calibration progress
    loadCalibrationProgress();
    
    // Set up quantum navigation
    setupQuantumNavigation();
    
    // Initialize cosmic sections
    initializeQuantumExplorer();
    initializeDimensionalScan();
    initializeCosmicSignature();
    
    // Create particle system
    new QuantumParticleSystem();
    
    // Show initial section
    showSection('home');
}

// Quantum Navigation Functions
function setupQuantumNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.dataset.section;
            showSection(section);
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionName).classList.add('active');
    
    // Update navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionName) {
            btn.classList.add('active');
        }
    });
    
    currentSection = sectionName;
    
    // Section-specific initialization
    if (sectionName === 'results') {
        updateCosmicSignature();
    }
}

// Quantum Explorer Functions
function initializeQuantumExplorer() {
    renderFieldsGrid();
    setupQuantumScanner();
    setupFrequencyFilter();
}

function renderFieldsGrid() {
    const grid = document.getElementById('fields-grid');
    grid.innerHTML = '';
    
    filteredFields.forEach(fieldKey => {
        const field = CONSCIOUSNESS_FIELDS[fieldKey];
        const card = createFieldCard(fieldKey, field);
        grid.appendChild(card);
    });
}

function createFieldCard(fieldKey, field) {
    const card = document.createElement('div');
    card.className = 'field-card';
    card.onclick = () => openHolographicProjection(fieldKey);
    
    // Get user's calibration if available
    const userFrequency = calibrationProgress.responses[fieldKey] || 'quantum';
    const frequencyClass = userFrequency.toLowerCase();
    
    card.innerHTML = `
        <div class="field-header">
            <h3>${field.name}</h3>
            <div class="frequency-indicator ${frequencyClass}"></div>
        </div>
        <p class="field-description">${field.description}</p>
        <div class="field-preview">
            <div class="spectrum-mini">
                <div class="spectrum-point singularity ${userFrequency === 'singularity' ? 'active' : ''}"></div>
                <div class="spectrum-point positive ${userFrequency === 'positive' ? 'active' : ''}"></div>
                <div class="spectrum-point quantum ${userFrequency === 'quantum' ? 'active' : ''}"></div>
                <div class="spectrum-point negative ${userFrequency === 'negative' ? 'active' : ''}"></div>
                <div class="spectrum-point void ${userFrequency === 'void' ? 'active' : ''}"></div>
            </div>
        </div>
    `;
    
    return card;
}

function setupQuantumScanner() {
    const scannerInput = document.getElementById('field-scanner');
    scannerInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        filteredFields = Object.keys(CONSCIOUSNESS_FIELDS).filter(key => {
            const field = CONSCIOUSNESS_FIELDS[key];
            return field.name.toLowerCase().includes(query) ||
                   field.description.toLowerCase().includes(query);
        });
        renderFieldsGrid();
    });
}

function setupFrequencyFilter() {
    const filterSelect = document.getElementById('frequency-filter');
    filterSelect.addEventListener('change', (e) => {
        const filter = e.target.value;
        applyFrequencyFilter(filter);
    });
}

function applyFrequencyFilter(filter) {
    switch(filter) {
        case 'positive':
            filteredFields = Object.keys(CONSCIOUSNESS_FIELDS).filter(key => {
                const userFreq = calibrationProgress.responses[key];
                return userFreq === 'singularity' || userFreq === 'positive';
            });
            break;
        case 'negative':
            filteredFields = Object.keys(CONSCIOUSNESS_FIELDS).filter(key => {
                const userFreq = calibrationProgress.responses[key];
                return userFreq === 'negative' || userFreq === 'void';
            });
            break;
        case 'balanced':
            filteredFields = Object.keys(CONSCIOUSNESS_FIELDS).filter(key => {
                const userFreq = calibrationProgress.responses[key];
                return userFreq === 'quantum';
            });
            break;
        default:
            filteredFields = Object.keys(CONSCIOUSNESS_FIELDS);
    }
    renderFieldsGrid();
}

// Holographic Projection Functions
function openHolographicProjection(fieldKey) {
    const field = CONSCIOUSNESS_FIELDS[fieldKey];
    const modal = document.getElementById('field-modal');
    const modalName = document.getElementById('modal-field-name');
    const spectrumDetail = document.getElementById('frequency-spectrum');
    
    modalName.textContent = field.name;
    
    spectrumDetail.innerHTML = '';
    Object.entries(field.spectrum).forEach(([frequency, data]) => {
        const frequencyDiv = document.createElement('div');
        frequencyDiv.className = `frequency-level ${frequency}`;
        frequencyDiv.innerHTML = `
            <div class="frequency-header">
                <h4>${data.title}</h4>
            </div>
            <p class="frequency-description">${data.description}</p>
            <p class="frequency-example"><em>Example: ${data.example}</em></p>
        `;
        spectrumDetail.appendChild(frequencyDiv);
    });
    
    modal.style.display = 'block';
}

function closeProjection() {
    document.getElementById('field-modal').style.display = 'none';
}

// Dimensional Scan Functions
function initializeDimensionalScan() {
    if (calibrationProgress.completed) {
        showCalibrationComplete();
    } else {
        showCurrentField();
    }
}

function showCurrentField() {
    const fieldKeys = Object.keys(CONSCIOUSNESS_FIELDS);
    const currentKey = fieldKeys[calibrationProgress.currentFieldIndex];
    
    if (!currentKey) {
        completeCalibration();
        return;
    }
    
    const field = CONSCIOUSNESS_FIELDS[currentKey];
    
    // Update progress beam
    updateAlignmentBeam();
    
    // Update field display
    document.getElementById('current-field-name').textContent = field.name;
    document.getElementById('current-field-description').textContent = field.description;
    
    // Create frequency options
    const optionsContainer = document.getElementById('frequency-options');
    optionsContainer.innerHTML = '';
    
    Object.entries(field.spectrum).forEach(([frequency, data]) => {
        const option = document.createElement('div');
        option.className = `frequency-option ${frequency}`;
        if (calibrationProgress.responses[currentKey] === frequency) {
            option.classList.add('selected');
        }
        
        option.onclick = () => selectFrequency(currentKey, frequency);
        
        option.innerHTML = `
            <div class="option-header">
                <h5>${data.title}</h5>
            </div>
            <p>${data.description}</p>
            <small>${data.example}</small>
        `;
        
        optionsContainer.appendChild(option);
    });
    
    // Update calibration controls
    updateCalibrationControls();
}

function selectFrequency(fieldKey, frequency) {
    calibrationProgress.responses[fieldKey] = frequency;
    saveCalibrationProgress();
    
    // Update visual selection
    document.querySelectorAll('.frequency-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    event.target.closest('.frequency-option').classList.add('selected');
    
    // Enable next button
    document.getElementById('next-field').disabled = false;
}

function updateAlignmentBeam() {
    const totalFields = Object.keys(CONSCIOUSNESS_FIELDS).length;
    const progress = (calibrationProgress.currentFieldIndex / totalFields) * 100;
    
    document.getElementById('alignment-beam').style.width = progress + '%';
    document.getElementById('calibration-status').textContent = 
        `${calibrationProgress.currentFieldIndex} / ${totalFields}`;
}

function updateCalibrationControls() {
    const prevBtn = document.getElementById('prev-field');
    const nextBtn = document.getElementById('next-field');
    
    prevBtn.disabled = calibrationProgress.currentFieldIndex === 0;
    
    const currentKey = Object.keys(CONSCIOUSNESS_FIELDS)[calibrationProgress.currentFieldIndex];
    nextBtn.disabled = !calibrationProgress.responses[currentKey];
    
    if (calibrationProgress.currentFieldIndex === Object.keys(CONSCIOUSNESS_FIELDS).length - 1) {
        nextBtn.textContent = 'Complete Calibration';
    } else {
        nextBtn.textContent = 'Next Field';
    }
}

function previousField() {
    if (calibrationProgress.currentFieldIndex > 0) {
        calibrationProgress.currentFieldIndex--;
        showCurrentField();
        saveCalibrationProgress();
    }
}

function nextField() {
    const totalFields = Object.keys(CONSCIOUSNESS_FIELDS).length;
    
    if (calibrationProgress.currentFieldIndex < totalFields - 1) {
        calibrationProgress.currentFieldIndex++;
        showCurrentField();
    } else {
        completeCalibration();
    }
    
    saveCalibrationProgress();
}

function completeCalibration() {
    calibrationProgress.completed = true;
    saveCalibrationProgress();
    showCalibrationComplete();
}

function showCalibrationComplete() {
    document.getElementById('field-assessment').style.display = 'none';
    document.getElementById('calibration-complete').style.display = 'block';
    updateAlignmentBeam();
}

// Cosmic Signature Functions
function initializeCosmicSignature() {
    if (Object.keys(calibrationProgress.responses).length > 0) {
        updateCosmicSignature();
    }
}

function updateCosmicSignature() {
    const responses = calibrationProgress.responses;
    
    if (Object.keys(responses).length === 0) {
        document.getElementById('frequency-distribution').innerHTML = 
            '<p>Complete the dimensional calibration to see your cosmic signature.</p>';
        return;
    }
    
    // Generate frequency distribution
    generateFrequencyDistribution(responses);
    
    // Generate cosmic insights
    generateCosmicInsights(responses);
    
    // Update resonance visualization
    updateResonanceChart(responses);
}

function generateFrequencyDistribution(responses) {
    const distribution = document.getElementById('frequency-distribution');
    const frequencies = { singularity: 0, positive: 0, quantum: 0, negative: 0, void: 0 };
    
    Object.values(responses).forEach(freq => {
        frequencies[freq]++;
    });
    
    const total = Object.keys(responses).length;
    
    distribution.innerHTML = `
        <div class="distribution-stats">
            <div class="stat singularity">
                <h4>Singularity</h4>
                <span>${frequencies.singularity}</span>
                <small>${Math.round((frequencies.singularity/total)*100)}%</small>
            </div>
            <div class="stat positive">
                <h4>Positive Pull</h4>
                <span>${frequencies.positive}</span>
                <small>${Math.round((frequencies.positive/total)*100)}%</small>
            </div>
            <div class="stat quantum">
                <h4>Superposition</h4>
                <span>${frequencies.quantum}</span>
                <small>${Math.round((frequencies.quantum/total)*100)}%</small>
            </div>
            <div class="stat negative">
                <h4>Perturbation</h4>
                <span>${frequencies.negative}</span>
                <small>${Math.round((frequencies.negative/total)*100)}%</small>
            </div>
            <div class="stat void">
                <h4>Void</h4>
                <span>${frequencies.void}</span>
                <small>${Math.round((frequencies.void/total)*100)}%</small>
            </div>
        </div>
    `;
}

function generateCosmicInsights(responses) {
    const insights = document.getElementById('alignment-insights');
    const frequencies = { singularity: 0, positive: 0, quantum: 0, negative: 0, void: 0 };
    
    Object.values(responses).forEach(freq => {
        frequencies[freq]++;
    });
    
    let dominantFrequency = 'quantum';
    let maxCount = frequencies.quantum;
    
    Object.entries(frequencies).forEach(([freq, count]) => {
        if (count > maxCount) {
            maxCount = count;
            dominantFrequency = freq;
        }
    });
    
    const positiveFields = [];
    const growthFields = [];
    
    Object.entries(responses).forEach(([field, freq]) => {
        if (freq === 'singularity' || freq === 'positive') {
            positiveFields.push(CONSCIOUSNESS_FIELDS[field].name);
        } else if (freq === 'negative' || freq === 'void') {
            growthFields.push(CONSCIOUSNESS_FIELDS[field].name);
        }
    });
    
    insights.innerHTML = `
        <div class="insights-content">
            <div class="insight-section">
                <h4>Your Dominant Cosmic Frequency: ${getFrequencyTitle(dominantFrequency)}</h4>
                <p>Most of your consciousness fields resonate at the ${dominantFrequency} frequency, indicating ${getFrequencyDescription(dominantFrequency)}.</p>
            </div>
            
            ${positiveFields.length > 0 ? `
            <div class="insight-section">
                <h4>Your Cosmic Strengths</h4>
                <p>You demonstrate positive or singularity resonance in: ${positiveFields.join(', ')}</p>
            </div>
            ` : ''}
            
            ${growthFields.length > 0 ? `
            <div class="insight-section">
                <h4>Dimensional Growth Opportunities</h4>
                <p>Consider recalibrating these consciousness fields: ${growthFields.join(', ')}</p>
            </div>
            ` : ''}
            
            <div class="insight-section">
                <h4>Cosmic Alignment Protocols</h4>
                <ul>
                    <li>Focus on your positive resonance fields to amplify cosmic influence</li>
                    <li>Work on balancing extreme frequencies toward quantum superposition</li>
                    <li>Use your dimensional awareness for continuous cosmic evolution</li>
                    <li>Consider how your consciousness signature affects interdimensional relationships</li>
                </ul>
            </div>
        </div>
    `;
}

function getFrequencyTitle(frequency) {
    const titles = {
        singularity: 'Singularity of Benevolence',
        positive: 'Positive Gravitational Pull',
        quantum: 'Quantum Superposition',
        negative: 'Negative Energy Perturbation',
        void: 'Black Hole of Self-Absorption'
    };
    return titles[frequency] || 'Unknown Frequency';
}

function getFrequencyDescription(frequency) {
    const descriptions = {
        singularity: 'an exceptionally altruistic and cosmic approach to consciousness',
        positive: 'a generally positive and harmonious approach to dimensional interactions',
        quantum: 'a balanced approach that adapts to cosmic circumstances',
        negative: 'a tendency toward self-interest that may disrupt dimensional harmony',
        void: 'patterns that may be destructive to yourself and other consciousness entities'
    };
    return descriptions[frequency] || 'a unique cosmic signature';
}

function updateResonanceChart(responses) {
    const canvas = document.getElementById('resonance-chart');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Simple cosmic bar chart
    const frequencies = { singularity: 0, positive: 0, quantum: 0, negative: 0, void: 0 };
    Object.values(responses).forEach(freq => {
        frequencies[freq]++;
    });
    
    const colors = {
        singularity: '#FFD700',
        positive: '#00D4FF',
        quantum: '#8A2BE2',
        negative: '#FF8800',
        void: '#FF0044'
    };
    
    const barWidth = 60;
    const barSpacing = 20;
    const maxHeight = 250;
    const maxValue = Math.max(...Object.values(frequencies));
    
    let x = 40;
    Object.entries(frequencies).forEach(([freq, count]) => {
        const height = maxValue > 0 ? (count / maxValue) * maxHeight : 0;
        const y = canvas.height - height - 40;
        
        // Draw cosmic bar with glow effect
        ctx.shadowColor = colors[freq];
        ctx.shadowBlur = 10;
        ctx.fillStyle = colors[freq];
        ctx.fillRect(x, y, barWidth, height);
        
        // Draw label
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '12px Rajdhani';
        ctx.textAlign = 'center';
        ctx.fillText(freq.charAt(0).toUpperCase() + freq.slice(1), x + barWidth/2, canvas.height - 20);
        
        // Draw value
        ctx.fillText(count.toString(), x + barWidth/2, y - 10);
        
        x += barWidth + barSpacing;
    });
}

// Utility Functions
function resetCalibration() {
    calibrationProgress = {
        currentFieldIndex: 0,
        responses: {},
        completed: false
    };
    saveCalibrationProgress();
    
    document.getElementById('field-assessment').style.display = 'block';
    document.getElementById('calibration-complete').style.display = 'none';
    
    showCurrentField();
    renderFieldsGrid();
}

function exportCosmicData() {
    const results = {
        timestamp: new Date().toISOString(),
        cosmicSignature: calibrationProgress.responses,
        dimensionalAnalysis: generateExportSummary()
    };
    
    const dataStr = JSON.stringify(results, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    
    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = 'cosmic-consciousness-signature.json';
    link.click();
}

function generateExportSummary() {
    const responses = calibrationProgress.responses;
    const frequencies = { singularity: 0, positive: 0, quantum: 0, negative: 0, void: 0 };
    
    Object.values(responses).forEach(freq => {
        frequencies[freq]++;
    });
    
    return {
        totalFields: Object.keys(responses).length,
        frequencyDistribution: frequencies,
        calibrationCompleted: new Date().toISOString()
    };
}

function saveCalibrationProgress() {
    localStorage.setItem('cosmic-calibration-progress', JSON.stringify(calibrationProgress));
}

function loadCalibrationProgress() {
    const saved = localStorage.getItem('cosmic-calibration-progress');
    if (saved) {
        calibrationProgress = JSON.parse(saved);
    }
}

// Event listeners for holographic modal
window.onclick = function(event) {
    const modal = document.getElementById('field-modal');
    if (event.target === modal) {
        closeProjection();
    }
}

