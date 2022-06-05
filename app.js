function upperCase(){
  let content = document.getElementById('content').value;
  document.getElementById('content').value = content.toUpperCase();
  updatePreview();
}
function lowerCase(){
  let content = document.getElementById('content').value;
  document.getElementById('content').value = content.toLowerCase();
  updatePreview();
}
function clearText(){
  document.getElementById('content').value = '';
  document.getElementById('previewContent').innerHTML = "Nothing to preview!"
  updatePreview();
}
function trim(){
  let content = document.getElementById('content').value;
  document.getElementById('content').value = content.trim();
  updatePreview();
}
function copy(){
  let content = document.getElementById('content').value;
  navigator.clipboard.writeText(content);
  alert('Copied to clipboard');
}
function updatePreview(){
  let content = document.getElementById('content').value;
  let words = content ? content.split(' ').length : 0;
  let characters = content.length;
  let readTime = Math.ceil(content.length/200);

  document.getElementById('previewContent').innerHTML = content || 'Nothing to preview!';
  document.getElementById('count').innerHTML = `${words} words ${characters} characters`
  document.getElementById('readTime').innerHTML = `${readTime} minute read`;
}
