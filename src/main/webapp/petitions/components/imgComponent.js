
var ImgComponent = {
    view: function(vnode) {
        const {src, alt} = vnode.attrs;
        return m("img", {src: src, alt:alt, width: "50", height: "50", class: "rounded-circle"});
    }
}

module.exports = ImgComponent;