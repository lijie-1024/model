$(function () {
  const textJson = [
    { id: 1, title: '视频1', eg_title: 'eg_title', hrefSrc: 'viedo/vi.mp4', date: '2020年11月4号' },
    { id: 2, title: '视频2', eg_title: 'eg_title', hrefSrc: 'viedo/vi.mp4', date: '2020年11月4号' },
    { id: 3, title: '视频3', eg_title: 'eg_title', hrefSrc: 'viedo/vi.mp4', date: '2020年11月4号' },
  ]
  getList()
  // 渲染
  function getList() {
    let src = ''
    textJson.forEach((e) => {
      src += `
          <tr>
          <td>${e.id}</td>
          <td>${e.title}</td>
          <td>${e.eg_title}</td>
          <td>${e.hrefSrc}</td>
          <td>${e.date}</td>
          <td>
              <button type="button" data-id=${e.id} class="btn editBtn btn-primary">编辑</button>
              <button type="button" data-id=${e.id} class="btn deletBtn btn-danger"> 删除</button>
          </td>
              </tr>
          `
    })
    $('#articleTable').html(src)
  }
  //   编辑
  $('.editBtn').click(function (e) {
    let id = e.target.dataset.id
    let chooseData = textJson.find((i) => i.id == id)
    $('#articleFrom').setForm(chooseData)
  })
  //   删除
  $('.deletBtn').click(function (e) {
    let id = e.target.dataset.id
    console.log(id)
  })

  //   新增
  $('#submit').click(function (e) {
    e.preventDefault()
    let data = $('#articleFrom').serializeJson()
    console.log(data)
    // 拿到单条数据，调保存接口传参，然后刷新页面
    // getList()
    $('#articleFrom')[0].reset()
  })
})
