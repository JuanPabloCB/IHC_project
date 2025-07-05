// Función para cerrar sesión
function logout() {
    const confirmLogout = confirm('¿Estás seguro de que quieres cerrar sesión?');
    if (confirmLogout) {
        window.location.href = './login.html';
    }
    return false;
}

// Función para ir al inicio
function goToHome() {
    window.location.href = '../public/index.html';
}

// Función para volver a intranet
function goBack() {
    window.location.href = '../public/intranet.html';
}

document.getElementById('closeModal').addEventListener('click', () => {
    window.location.href = 'intranet.html';
});

// Configurar rutas
const ROUTES = {
    HOME: '../public/index.html',
    LOGIN: '../public/login.html',
    DASHBOARD: '../public/dashboard.html',
    PROFILE: '../public/profile.html',
    SETTINGS: '../public/configuracion.html',
    INTRANET: '../public/intranet.html'
};

// Función para navegar
function navigateTo(route) {
    if (ROUTES[route]) {
        window.location.href = ROUTES[route];
    } else {
        console.error('Ruta no encontrada:', route);
    }
}

// FUNCIONALIDAD DE ACORDEÓN - Cristina
const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
    acc.addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// MODAL DE ELIMINAR CUENTA - Oliver
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// CAMBIO DE CONTRASEÑA
const changePasswordBtn = document.getElementById('changePasswordBtn');
const closePasswordModalBtn = document.getElementById('closePasswordModal');
const passwordModal = document.getElementById('passwordModal');
const savePasswordBtn = document.getElementById('savePasswordBtn');

changePasswordBtn.addEventListener('click', () => {
    passwordModal.style.display = 'flex';
});

closePasswordModalBtn.addEventListener('click', () => {
    passwordModal.style.display = 'none';
});

savePasswordBtn.addEventListener('click', () => {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validaciones
    if (!currentPassword) {
        alert('Por favor ingresa tu contraseña actual');
        return;
    }

    if (!newPassword) {
        alert('Por favor ingresa una nueva contraseña');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    if (newPassword.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }

    alert('Contraseña cambiada exitosamente');
    passwordModal.style.display = 'none';
    
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === passwordModal) {
        passwordModal.style.display = 'none';
    }
});

// MOSTRAR/OCULTAR CONTRASEÑA
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const toggle = field.nextElementSibling;
    
    if (field.type === 'password') {
        field.type = 'text';
        toggle.textContent = '🙈';
    } else {
        field.type = 'password';
        toggle.textContent = '👁️';
    }
}

// FUNCIONALIDAD DE TAMAÑO DE TEXTO
const textSizeSlider = document.getElementById('textSizeSlider');
const textPreview = document.getElementById('textPreview');

textSizeSlider.addEventListener('input', function() {
    const fontSize = this.value + 'px';
    textPreview.style.fontSize = fontSize;
    
    localStorage.setItem('textSize', this.value);
});

// Cargar tamaño de texto guardado
const savedTextSize = localStorage.getItem('textSize');
if (savedTextSize) {
    textSizeSlider.value = savedTextSize;
    textPreview.style.fontSize = savedTextSize + 'px';
}

// FUNCIONALIDAD DE TEMAS 
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// Cargar tema guardado al iniciar
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

themeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const theme = this.dataset.theme;
        
        // Remover clase activa de todos los botones
        themeButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        if (theme === 'auto') {
            // Detectar preferencia del sistema
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark ? 'dark' : 'light');
        } else {
            applyTheme(theme);
        }
        
        // Guardar preferencia
        localStorage.setItem('theme', theme);
    });
});

function applyTheme(theme) {
    body.className = theme + '-theme';
    
    // Actualizar botón activo basado en el tema guardado
    const savedThemePreference = localStorage.getItem('theme') || 'light';
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === savedThemePreference) {
            btn.classList.add('active');
        }
    });
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'auto') {
        applyTheme(e.matches ? 'dark' : 'light');
    }
});

// FUNCIONALIDAD PARA NOTIFICACIÓN
const notificationRadios = document.querySelectorAll('input[name="notification-type"]');
notificationRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        console.log('Tipo de notificación seleccionado:', this.value);
        // Guardar preferencia
        localStorage.setItem('notificationType', this.value);
    });
});

// Cargar tipo de notificación guardado
const savedNotificationType = localStorage.getItem('notificationType');
if (savedNotificationType) {
    const radioToCheck = document.querySelector(`input[name="notification-type"][value="${savedNotificationType}"]`);
    if (radioToCheck) {
        radioToCheck.checked = true;
    }
}

// GUARDAR CONFIGURACIONES DE SWITCHES
const switches = document.querySelectorAll('.switch input[type="checkbox"]');
switches.forEach((switchElement, index) => {
    const savedState = localStorage.getItem(`switch-${index}`);
    if (savedState !== null) {
        switchElement.checked = savedState === 'true';
    }
    
    // Guardar cambios
    switchElement.addEventListener('change', function() {
        localStorage.setItem(`switch-${index}`, this.checked);
        console.log(`Switch ${index} cambiado a:`, this.checked);
    });
});

// GUARDAR CONFIGURACIONES DE CUENTA
const usernameInput = document.querySelector('input[value="Usuario123"]');
const emailInput = document.querySelector('input[value="usuario@email.com"]');
const languageSelect = document.querySelector('.select-styled');

// Cargar datos guardados
const savedUsername = localStorage.getItem('username');
const savedEmail = localStorage.getItem('email');
const savedLanguage = localStorage.getItem('language');

if (savedUsername) usernameInput.value = savedUsername;
if (savedEmail) emailInput.value = savedEmail;
if (savedLanguage) languageSelect.value = savedLanguage;

// Guardar cambios en tiempo real
usernameInput.addEventListener('input', function() {
    localStorage.setItem('username', this.value);
});

emailInput.addEventListener('input', function() {
    localStorage.setItem('email', this.value);
});

languageSelect.addEventListener('change', function() {
    localStorage.setItem('language', this.value);
    console.log('Idioma cambiado a:', this.value);
});

// FUNCIONALIDAD ADICIONAL - VALIDACIONES

// Validar formato de email
emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.value)) {
        this.style.borderColor = '#ff7b7b';
        this.title = 'Por favor ingresa un email válido';
    } else {
        this.style.borderColor = '#5CC3D6';
        this.title = '';
    }
});

// Validar nombre de usuario
usernameInput.addEventListener('blur', function() {
    if (this.value.length < 3) {
        this.style.borderColor = '#ff7b7b';
        this.title = 'El nombre de usuario debe tener al menos 3 caracteres';
    } else {
        this.style.borderColor = '#5CC3D6';
        this.title = '';
    }
});

// CONFIRMACIÓN AL ELIMINAR CUENTA
const deleteAccountBtn = document.querySelector('.btn-delete');
deleteAccountBtn.addEventListener('click', function() {
    const emailField = modal.querySelector('input[type="email"]');
    const passwordField = modal.querySelector('input[type="password"]');
    
    if (!emailField.value || !passwordField.value) {
        alert('Por favor completa todos los campos');
        return;
    }
    
    const confirmDelete = confirm('¿Estás seguro de que quieres eliminar tu cuenta? Esta acción no se puede deshacer.');
    if (confirmDelete) {
        alert('Cuenta eliminada exitosamente');
        modal.style.display = 'none';
        navigateTo('LOGIN');
    }
});

// CONFIGURACIÓN DE BOTONES DE NAVEGACIÓN
document.addEventListener('DOMContentLoaded', function() {
    console.log('Página de configuración cargada');
    
    // Aplicar configuraciones guardadas
    applyTheme(localStorage.getItem('theme') || 'light');
    const backButton = document.querySelector('.volver');
    if (backButton) {
        backButton.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo('INTRANET');
        });
    }
    
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        if (link.textContent.includes('Inicio')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                goToHome();
            });
        } else if (link.textContent.includes('Cerrar Sesión')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                logout();
            });
        }
    });
    
    const username = localStorage.getItem('username') || 'Usuario';
    console.log(`Bienvenido, ${username}!`);
});

// FUNCIÓN PARA EXPORTAR CONFIGURACIONES
function exportSettings() {
    const settings = {
        theme: localStorage.getItem('theme'),
        textSize: localStorage.getItem('textSize'),
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        language: localStorage.getItem('language'),
        notificationType: localStorage.getItem('notificationType')
    };
    
    const dataStr = JSON.stringify(settings, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'configuracion.json';
    link.click();
}

// FUNCIÓN PARA IMPORTAR CONFIGURACIONES
function importSettings(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const settings = JSON.parse(e.target.result);
                Object.keys(settings).forEach(key => {
                    if (settings[key] !== null) {
                        localStorage.setItem(key, settings[key]);
                    }
                });
                alert('Configuraciones importadas exitosamente');
                location.reload();
            } catch (error) {
                alert('Error al importar configuraciones');
            }
        };
        reader.readAsText(file);
    }
}

// FUNCIONES ADICIONALES DE NAVEGACIÓN
function navigateWithConfirmation(route, message) {
    if (confirm(message)) {
        navigateTo(route);
    }
}

// Función para navegación con loading
function navigateWithLoading(route) {
    const loadingMessage = document.createElement('div');
    loadingMessage.textContent = 'Cargando...';
    loadingMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #5CC3D6;
        color: white;
        padding: 20px;
        border-radius: 10px;
        z-index: 9999;
    `;
    document.body.appendChild(loadingMessage);
    
    setTimeout(() => {
        document.body.removeChild(loadingMessage);
        navigateTo(route);
    }, 1000);
}

window.addEventListener('error', function(e) {
    console.error('Error en la página:', e.error);
});

function showCurrentSettings() {
    const settings = {
        theme: localStorage.getItem('theme'),
        textSize: localStorage.getItem('textSize'),
        username: localStorage.getItem('username'),
        email: localStorage.getItem('email'),
        language: localStorage.getItem('language'),
        notificationType: localStorage.getItem('notificationType')
    };
    console.table(settings);
}
