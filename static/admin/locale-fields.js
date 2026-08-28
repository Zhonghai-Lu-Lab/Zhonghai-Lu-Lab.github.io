/*
 * Decap accepts only one string for a field label or hint, even when the
 * content itself is translated. This small UI-only adapter keeps the schema
 * bilingual while showing English guidance in the EN editor and Chinese
 * guidance in the ZH editor. It never reads or changes field values.
 */
(function () {
  'use strict';

  const text = {
    'CMS managed / CMS 管理标记': ['CMS managed', 'CMS 管理标记'],
    'Title / 标题': ['Title', '标题'],
    'Publication date / 发布日期': ['Publication date', '发布日期'],
    'Date / 日期': ['Date', '日期'],
    'Category / 分类': ['Category', '分类'],
    'Summary / 摘要': ['Summary', '摘要'],
    'Featured image / 封面图片': ['Featured image', '封面图片'],
    'Image alt text / 图片说明': ['Image alt text', '图片说明'],
    'Body / 正文': ['Body', '正文'],
    'Show on homepage / 首页显示': ['Show on homepage', '首页显示'],
    'Official paper title / 正式论文题名': ['Official paper title', '正式论文题名'],
    'Authors / 作者': ['Authors', '作者'],
    'Venue / 期刊或会议': ['Venue', '期刊或会议'],
    'Year / 年份': ['Year', '年份'],
    'Project name / 项目名称': ['Project name', '项目名称'],
    'Record date / 项目日期': ['Record date', '项目日期'],
    'Display order / 首页顺序': ['Display order', '首页顺序'],
    'Status / 项目状态': ['Status', '项目状态'],
    'Short summary / 项目简介': ['Short summary', '项目简介'],
    'Project abstract / 项目摘要': ['Project abstract', '项目摘要'],
    'Kicker / 栏目短标题': ['Kicker', '栏目短标题'],
    'Hero image / 主图': ['Hero image', '主图'],
    'Presentation style / 展示样式': ['Presentation style', '展示样式'],
    'Image position / 图片位置': ['Image position', '图片位置'],
    'Event details / 事件详情': ['Event details', '事件详情'],
    'Label / 标签': ['Label', '标签'],
    'Value / 内容': ['Value', '内容'],
    'Button text / 按钮文字': ['Button text', '按钮文字'],
    'Button target / 按钮目标': ['Button target', '按钮目标'],
    'Additional buttons / 多按钮': ['Additional buttons', '多按钮'],
    'Show in carousel / 进入轮播': ['Show in carousel', '进入轮播'],
    'Order / 顺序': ['Order', '顺序'],
    'Recipient / 获奖人或团队': ['Recipient', '获奖人或团队'],
    'Awarder / 颁奖方': ['Awarder', '颁奖方'],
    'Level / 级别': ['Level', '级别'],
    'Standard image / 标准图片': ['Standard image', '标准图片'],
    'Poster / 海报': ['Poster', '海报'],
    'Split image and text / 图文分栏': ['Split image and text', '图文分栏'],
    'AIR circuit animation / AIR 芯片动画': ['AIR circuit animation', 'AIR 芯片动画'],
    'Active / 进行中': ['Active', '进行中'],
    'Completed / 已完成': ['Completed', '已完成'],
    'Upcoming / 即将开始': ['Upcoming', '即将开始'],

    'Must be today or earlier. / 不得晚于今天。': [
      'Must be today or earlier.',
      '不得晚于今天。',
    ],
    'One shared image for both languages. / 中英文共用一张图片。': [
      'One shared image for both languages.',
      '中英文共用一张图片。',
    ],
    'Keep the DBLP title exactly the same to prevent duplicates. / 与 DBLP 题名完全一致可避免重复。': [
      'Keep the DBLP title exactly the same to prevent duplicates.',
      '请与 DBLP 题名保持完全一致，以免产生重复记录。',
    ],
    'Upload or select the paper PDF. / 上传或选择论文 PDF。': [
      'Upload or select the paper PDF.',
      '上传或选择论文 PDF。',
    ],
    'Lower numbers appear first. / 数字越小越靠前。': [
      'Lower numbers appear first.',
      '数字越小越靠前。',
    ],
    'Short text displayed on the homepage card. / 首页项目卡片上的简短介绍。': [
      'Short text displayed on the homepage card.',
      '填写显示在首页项目卡片上的简短介绍。',
    ],
    'Use AIR circuit animation only for the permanent AIR opening slide. / AIR 芯片动画仅用于固定开场页。': [
      'Use AIR circuit animation only for the permanent AIR opening slide.',
      'AIR 芯片动画仅用于固定的 AIR 开场页。',
    ],
    'Optional CSS position, such as top, center, or 50% 30%. / 可选，例如 top、center 或 50% 30%。': [
      'Optional CSS position, such as top, center, or 50% 30%.',
      '可选，可填写 top、center 或 50% 30% 等图片位置。',
    ],
    'Speaker, time, venue, host, etc. / 可填写主讲、时间、地点、主持等信息。': [
      'Optional details such as speaker, time, venue, and host.',
      '可填写主讲、时间、地点、主持等信息。',
    ],
    'Leave empty when using Additional buttons. / 使用多按钮时留空。': [
      'Leave empty when using Additional buttons.',
      '使用“多按钮”时请留空。',
    ],
    'Example: #news or /news/article-slug/. / 例如 #news 或 /zh/news/article-slug/。': [
      'Example: #news or /news/article-slug/.',
      '例如：#news 或 /zh/news/article-slug/。',
    ],
    'Add items only when more than one button is needed. / 仅在需要多个按钮时添加。': [
      'Add items only when more than one button is needed.',
      '仅在需要多个按钮时添加。',
    ],
    'Turn off to hide without deleting. / 关闭后下架但不删除。': [
      'Turn off to hide this slide without deleting it.',
      '关闭后轮播会下架，但内容不会被删除。',
    ],
    'Lower numbers appear first; keep 1 for the AIR opening slide. / 数字越小越靠前；1 保留给 AIR 开场页。': [
      'Lower numbers appear first; keep 1 for the AIR opening slide.',
      '数字越小越靠前；1 保留给 AIR 开场页。',
    ],
    'Person, team, or project receiving the award. / 填写获奖个人、团队或项目。': [
      'Enter the person, team, or project receiving the award.',
      '填写获奖个人、团队或项目。',
    ],
    'Optional awarding organization or program. / 可选，填写颁奖单位或项目。': [
      'Optional: enter the awarding organization or program.',
      '可选，填写颁奖单位或项目。',
    ],
    'For example: Best Paper, National, Provincial, or University. / 例如：最佳论文、国家级、省级或校级。': [
      'For example: Best Paper, National, Provincial, or University.',
      '例如：最佳论文、国家级、省级或校级。',
    ],
  };

  const variants = new Map();
  Object.entries(text).forEach(([mixed, pair]) => {
    [mixed, pair[0], pair[1]].forEach((value) => variants.set(value, pair));
  });

  const markerPattern = /^(Writing in\s+(EN|ZH)|Editing English content|正在编辑中文内容)$/i;

  function directText(element) {
    return Array.from(element.childNodes)
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.nodeValue)
      .join('')
      .trim();
  }

  function findMarkers() {
    return Array.from(document.querySelectorAll('button, [role="button"], span, div'))
      .filter((element) => markerPattern.test(directText(element)));
  }

  function markerLocale(marker) {
    const value = directText(marker);
    return /ZH|中文/.test(value) ? 'zh' : 'en';
  }

  function paneFor(marker) {
    let pane = marker.parentElement;
    let best = null;
    while (pane && pane !== document.body) {
      const markerCount = Array.from(pane.querySelectorAll('button, [role="button"], span, div'))
        .filter((element) => markerPattern.test(directText(element))).length;
      if (markerCount > 1) break;
      if (pane.querySelector('input, textarea, [contenteditable="true"]')) best = pane;
      pane = pane.parentElement;
    }
    return best;
  }

  function replaceText(root, locale) {
    const index = locale === 'zh' ? 1 : 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest('script, style, textarea, [contenteditable="true"]')) return;
      const raw = node.nodeValue || '';
      const trimmed = raw.trim();
      const pair = variants.get(trimmed);
      if (!pair || trimmed === pair[index]) return;
      node.nodeValue = raw.replace(trimmed, pair[index]);
    });
  }

  function localizeEditors() {
    findMarkers().forEach((marker) => {
      const locale = markerLocale(marker);
      const pane = paneFor(marker);
      if (!pane) return;
      pane.dataset.airEditorLocale = locale;
      replaceText(pane, locale);

      const current = directText(marker);
      const desired = locale === 'zh' ? '正在编辑中文内容' : 'Editing English content';
      if (current !== desired) {
        Array.from(marker.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .forEach((node) => { node.nodeValue = node.nodeValue.replace(current, desired); });
      }
    });
  }

  let scheduled = false;
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      localizeEditors();
    });
  };

  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    characterData: true,
    subtree: true,
  });
  schedule();
}());
