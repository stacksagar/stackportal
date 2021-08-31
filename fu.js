const fu = document.getElementById('fu');
fu.addEventListener('mousemove', function (e) {
  let height = fu.clientHeight;
  let width = fu.clientWidth;
  console.log({
    x: (e.offsetX / width) * 100 + '%',
    y: (e.offsetY / height) * 100 + '%',
  });
});
