async function loadProjects() {
  const container = document.getElementById('project-list');
  if (!container) return;
  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) throw new Error('Không tải được dữ liệu dự án');
    const projects = await response.json();
    container.innerHTML = projects.map(project => `
      <article class="project-card">
        <div class="project-meta"><span>${project.number} / ${project.category}</span><span>${project.period}</span></div>
        <h3>${project.title}<br><em>${project.englishTitle}</em></h3>
        <p>${project.description}</p>
        <div class="project-tags">${project.tools.map(tool => `#${tool}`).join('　 ')}</div>
      </article>
    `).join('');
  } catch (error) {
    container.innerHTML = '<p>Chưa thể tải danh sách dự án. Vui lòng tải lại trang.</p>';
    console.error(error);
  }
}
loadProjects();
