import { useState, useEffect } from 'react';

function useTheme() {
  const [theme, setTheme] = useState('light'); // افتراضيًا نبدأ بالثيم الفاتح

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'); // محاولة جلب الثيم المحفوظ من localStorage
    if (savedTheme) {
      setTheme(savedTheme); // إذا كان هناك ثيم محفوظ، نستخدمه
    }
  }, []);

  useEffect(() => {
    document.body.className = theme; // تغيير الـ class على body حسب الثيم
    localStorage.setItem('theme', theme); // حفظ الثيم في localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light')); // التبديل بين الفاتح والداكن
  };

  return { theme, toggleTheme }; // إرجاع الثيم والدالة الخاصة بالتبديل
}

export default useTheme;
