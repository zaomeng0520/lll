// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 创建并显示一个自定义版权声明弹窗
    function showCopyrightModal() {
        // 创建模态框元素
        const modal = document.createElement('div');
        modal.className = 'copyright-modal';
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = '9999';
        
        // 创建模态框内容
        const modalContent = document.createElement('div');
        modalContent.className = 'copyright-modal-content';
        modalContent.style.backgroundColor = '#fff';
        modalContent.style.padding = '30px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.maxWidth = '450px';
        modalContent.style.textAlign = 'center';
        modalContent.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
        
        // 添加标题
        const title = document.createElement('h2');
        title.textContent = '版权声明';
        title.style.color = '#4CAF50';
        title.style.marginBottom = '15px';
        title.style.fontSize = '24px';
        
        // 添加声明文本
        const text = document.createElement('p');
        text.textContent = '本网站由曹书玮创建并拥有全部版权';
        text.style.fontSize = '18px';
        text.style.marginBottom = '10px';
        
        // 添加年份
        const year = document.createElement('p');
        const currentYear = new Date().getFullYear();
        year.textContent = `© ${currentYear} 保留所有权利`;
        year.style.fontSize = '16px';
        year.style.marginBottom = '20px';
        year.style.color = '#666';
        
        // 添加附加声明
        const additionalText = document.createElement('p');
        additionalText.textContent = '未经许可，禁止复制或分发本网站内容';
        additionalText.style.fontSize = '14px';
        additionalText.style.marginBottom = '25px';
        additionalText.style.color = '#666';
        
        // 添加按钮容器
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'center';
        buttonContainer.style.gap = '15px';
        
        // 添加拒绝按钮
        const rejectButton = document.createElement('button');
        rejectButton.textContent = '拒绝';
        rejectButton.style.backgroundColor = '#f44336';
        rejectButton.style.color = '#fff';
        rejectButton.style.border = 'none';
        rejectButton.style.padding = '10px 20px';
        rejectButton.style.borderRadius = '4px';
        rejectButton.style.cursor = 'pointer';
        rejectButton.style.fontSize = '16px';
        
        // 添加接受按钮
        const acceptButton = document.createElement('button');
        acceptButton.textContent = '我接受';
        acceptButton.style.backgroundColor = '#4CAF50';
        acceptButton.style.color = '#fff';
        acceptButton.style.border = 'none';
        acceptButton.style.padding = '10px 25px';
        acceptButton.style.borderRadius = '4px';
        acceptButton.style.cursor = 'pointer';
        acceptButton.style.fontSize = '16px';
        acceptButton.style.fontWeight = 'bold';
        
        // 拒绝按钮点击事件
        rejectButton.addEventListener('click', function() {
            if (confirm('您必须接受版权声明才能继续浏览本网站。是否离开？')) {
                window.location.href = 'about:blank';
            }
        });
        
        // 接受按钮点击事件
        acceptButton.addEventListener('click', function() {
            document.body.removeChild(modal);
            // 可以在这里设置cookie记录用户已接受版权声明
            localStorage.setItem('copyrightAccepted', 'true');
        });
        
        // 组装按钮容器
        buttonContainer.appendChild(rejectButton);
        buttonContainer.appendChild(acceptButton);
        
        // 组装模态框
        modalContent.appendChild(title);
        modalContent.appendChild(text);
        modalContent.appendChild(year);
        modalContent.appendChild(additionalText);
        modalContent.appendChild(buttonContainer);
        modal.appendChild(modalContent);
        
        // 添加到页面
        document.body.appendChild(modal);
    }
    
    // 检查用户是否已经接受版权声明
    const hasAcceptedCopyright = localStorage.getItem('copyrightAccepted');
    if (!hasAcceptedCopyright) {
        // 显示版权声明
        showCopyrightModal();
    }
    
    // 平滑滚动效果
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    for (const scrollLink of scrollLinks) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 导航栏固定效果
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 移动端导航菜单（可在需要时实现）
    function setupMobileNav() {
        // 此处可以添加汉堡菜单的点击事件处理
        // 示例：
        /*
        const menuToggle = document.createElement('div');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        const nav = document.querySelector('nav');
        header.insertBefore(menuToggle, nav);
        
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        */
    }
    
    // 检测是否为移动设备
    if (window.innerWidth <= 767) {
        setupMobileNav();
    }
    
    // 窗口大小改变时重新检查
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 767) {
            setupMobileNav();
        }
    });
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelectorAll('input[type="text"]')[1].value;
            const message = this.querySelector('textarea').value;
            
            // 这里可以添加表单验证逻辑
            
            // 模拟表单提交
            console.log('表单已提交:', { name, email, subject, message });
            alert('您的留言已成功提交！我们会尽快回复您。');
            
            // 清空表单
            this.reset();
            
            // 实际应用中，这里应该发送AJAX请求到服务器
        });
    }
    
    // 动画效果（可选）
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    }
    
    // 如果有需要动画的元素，可以取消下面的注释
    // window.addEventListener('scroll', animateOnScroll);
    // animateOnScroll(); // 初始检查
    
    // 打字机效果
    function typeWriter(element, text, speed = 55, callback) {
        let i = 0;
        element.innerHTML = '';
        element.style.opacity = '1';
        
        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                // 为较长文本加快速度，使体验更流畅
                const adjustedSpeed = text.length > 30 ? speed * 0.7 : speed;
                setTimeout(typing, adjustedSpeed);
            } else if (callback) {
                callback();
            }
        }
        
        typing();
    }
    
    // 初始化所有页面的打字机效果
    const heroTypeElements = document.querySelectorAll('.hero-type');
    if (heroTypeElements.length > 0) {
        heroTypeElements.forEach((el, index) => {
            // 保存原始文本
            const text = el.getAttribute('data-text');
            if (text) {
                // 清空元素内容并设置为不可见
                el.innerHTML = '';
                el.style.opacity = '0';
                
                // 为标题和段落设置不同的延迟
                const delay = index * 1200; // 让标题完全显示后再显示段落
                
                // 当元素在视口内时开始打字效果
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            // 设置延迟，让标题先显示，然后再显示段落
                            setTimeout(() => {
                                // 元素进入视口，开始打字效果
                                typeWriter(el, text);
                            }, delay);
                            // 只需触发一次
                            observer.unobserve(el);
                        }
                    });
                });
                
                observer.observe(el);
            }
        });
    }
    
    // 图片上传功能
    function initImageUpload() {
        // 获取所有图片上传组件
        const imageUploaders = document.querySelectorAll('.image-upload');
        
        imageUploaders.forEach(uploader => {
            const input = uploader.querySelector('input[type="file"]');
            const preview = uploader.querySelector('.image-preview');
            const placeholder = uploader.querySelector('.upload-placeholder');
            const removeBtn = uploader.querySelector('.remove-image');
            
            // 文件选择变化处理
            if (input) {
                input.addEventListener('change', function(e) {
                    const file = this.files[0];
                    if (file) {
                        // 检查文件类型
                        if (!file.type.match('image.*')) {
                            alert('请选择图片文件！');
                            return;
                        }
                        
                        // 检查文件大小（限制为5MB）
                        if (file.size > 5 * 1024 * 1024) {
                            alert('图片大小不能超过5MB！');
                            return;
                        }
                        
                        // 预览图片
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            if (preview) {
                                preview.style.backgroundImage = `url(${e.target.result})`;
                                preview.classList.add('has-image');
                            }
                            if (placeholder) {
                                placeholder.style.display = 'none';
                            }
                            if (removeBtn) {
                                removeBtn.style.display = 'flex';
                            }
                        };
                        reader.readAsDataURL(file);
                        
                        // 触发自定义事件
                        const event = new CustomEvent('imageSelected', { 
                            detail: { file, uploader } 
                        });
                        document.dispatchEvent(event);
                    }
                });
            }
            
            // 移除图片按钮处理
            if (removeBtn) {
                removeBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (input) {
                        input.value = '';
                    }
                    if (preview) {
                        preview.style.backgroundImage = '';
                        preview.classList.remove('has-image');
                    }
                    if (placeholder) {
                        placeholder.style.display = 'flex';
                    }
                    removeBtn.style.display = 'none';
                    
                    // 触发自定义事件
                    const event = new CustomEvent('imageRemoved', { 
                        detail: { uploader } 
                    });
                    document.dispatchEvent(event);
                });
            }
            
            // 点击上传区域触发文件选择
            if (placeholder) {
                placeholder.addEventListener('click', function() {
                    if (input) {
                        input.click();
                    }
                });
            }
        });
    }
    
    // 初始化图片裁剪功能
    function initImageCropper(container, options = {}) {
        if (!container) return null;
        
        // 默认选项
        const defaultOptions = {
            aspectRatio: 1, // 默认为1:1
            viewMode: 1,
            dragMode: 'move',
            autoCropArea: 0.8,
            restore: false,
            guides: true,
            center: true,
            highlight: false,
            cropBoxMovable: true,
            cropBoxResizable: true,
            toggleDragModeOnDblclick: false
        };
        
        // 合并选项
        const cropperOptions = {...defaultOptions, ...options};
        
        // 获取图片元素
        const image = container.querySelector('img');
        if (!image) return null;
        
        // 初始化裁剪器
        const cropper = new Cropper(image, cropperOptions);
        
        return cropper;
    }
    
    // 初始化图片上传功能
    initImageUpload();
    
    // 如果页面上有图片上传表单，处理表单提交
    const imageUploadForms = document.querySelectorAll('.image-upload-form');
    imageUploadForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 收集表单数据
            const formData = new FormData(this);
            
            // 显示加载状态
            const submitButton = this.querySelector('[type="submit"]');
            if (submitButton) {
                const originalText = submitButton.textContent;
                submitButton.disabled = true;
                submitButton.textContent = '上传中...';
                
                // 模拟上传过程（实际应用中这里应该是AJAX请求）
                setTimeout(() => {
                    alert('图片上传成功！');
                    
                    // 恢复按钮状态
                    submitButton.disabled = false;
                    submitButton.textContent = originalText;
                    
                    // 可选：重置表单
                    // this.reset();
                    
                    // 触发图片上传完成事件
                    const event = new CustomEvent('imageUploadComplete', {
                        detail: { form, success: true }
                    });
                    document.dispatchEvent(event);
                }, 1500);
            }
        });
    });
}); 
