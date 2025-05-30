function solution(wallpaper) {   
    let left = Math.min(...wallpaper.filter(w => w.includes("#")).map(w => w.indexOf("#")));
    let right = Math.max(...wallpaper.filter(w => w.includes("#")).map(w => w.lastIndexOf("#") + 1));
    let top = wallpaper.map(w => w.includes("#")).indexOf(true);
    let bottom = wallpaper.map(w => w.includes("#")).lastIndexOf(true) + 1;
    
    return [top, left, bottom, right];
}