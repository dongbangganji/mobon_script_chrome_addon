document.addEventListener('DOMContentLoaded',function (){
    document.getElementById("insite_insert").addEventListener("click",detail_mobonscript_check);
    document.getElementById("insite_insert").addEventListener("click",together_mobonscript_check);
    document.getElementById("insite_insert").addEventListener("click",ai_mobonscript_check);
    document.getElementById("detail_btn").addEventListener("click",detail_mobonscript_move);
    document.getElementById("together_btn").addEventListener("click",together_mobonscript_move);
    document.getElementById("ai_detail_btn").addEventListener("click",ai_mobonscript_move);
    $(document).on('click','#insite_reset',function(){
        htmlRemoveLocalStorage('Main');
        htmlRemoveLocalStorage('breakAway');
        htmlRemoveLocalStorage('breakAwayFull');
        htmlRemoveLocalStorage('shopDetail');
        htmlRemoveLocalStorage('shopDetail2');
        htmlRemoveLocalStorage('shopDetailTogether');
        htmlRemoveLocalStorage('naverQuick');
        htmlRemoveLocalStorage('naverBacon');
        htmlRemoveLocalStorage('DBCollection');
        htmlRemoveLocalStorage('aiRecommend');
        htmlRemoveLocalStorage('shoppingLens');
        htmlRemoveLocalStorage('newTabShoppingLens');
    });

    function htmlRemoveLocalStorage(key){
        $(".sno-input-box[data-type='"+key+"']").val('');
        $(".insite-textarea[data-type='"+key+"_html']").val('');
        removeLocalStorage(key);
    }

    $(document).on('click','.type_group_btn',function (){
        $('.type_group_btn').removeClass('active');
        $(this).addClass('active');
        $('.type_tab_group').addClass('hide');
        $('#'+$(this).data('type')+'_group').removeClass('hide');
        setLocalStorage('type_group_btn',$(this).data('type')+'_group')
    });
    if(getLocalStorage('type_group_btn')){
        $('#'+getLocalStorage('type_group_btn')+'_btn').addClass('active');
        $('#'+getLocalStorage('type_group_btn')).removeClass('hide');
    }
    function setLocalStorage(key,value){
        localStorage.setItem(key, value);
    }
    function getLocalStorage(key){
        return localStorage.getItem(key);
    }
    function removeLocalStorage(key){
        localStorage.removeItem(key);
        localStorage.removeItem(key+'_val');
    }

    /**
     * ?????? ?????? ??????
     * @param val
     */
    function copyToClipboard(val) {
        const t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }

    $(document).on('click','.copy_clipboard',function (){
        let temp = $(this).parent().parent().find('textarea:last').val();
        if(!temp){
            alert('?????? ??????????????????.');
        }
        $('.save_popup').show().fadeOut( 'slow' );
        copyToClipboard(temp);
    })

    function settingHtmlGetLocalStorage(name){
        htmlGetLocalStorage(name+'_web_footer');
        htmlGetLocalStorage(name+'_web_detail');
        htmlGetLocalStorage(name+'_web_cart');
        htmlGetLocalStorage(name+'_web_conversion');
        htmlGetLocalStorage(name+'_mobile_footer');
        htmlGetLocalStorage(name+'_mobile_detail');
        htmlGetLocalStorage(name+'_mobile_cart');
        htmlGetLocalStorage(name+'_mobile_conversion');
    }

    function settingHtmlSetLocalStorage(name,mobon_id){
        setLocalStorage(name+'_mobon_id',mobon_id);
        htmlSetLocalStorage(name+'_web_footer',mobon_id);
        htmlSetLocalStorage(name+'_web_detail',mobon_id);
        htmlSetLocalStorage(name+'_web_cart',mobon_id);
        htmlSetLocalStorage(name+'_web_conversion',mobon_id);
        htmlSetLocalStorage(name+'_mobile_footer',mobon_id);
        htmlSetLocalStorage(name+'_mobile_detail',mobon_id);
        htmlSetLocalStorage(name+'_mobile_cart',mobon_id);
        htmlSetLocalStorage(name+'_mobile_conversion',mobon_id);
    }

    $(document).on('click','.adIdCheck',function (){
        let name = $(this).data('name');
        let mobon_id = $('#'+name+'_mobon_id').val();

        if(!mobon_id){
            alert('????????????????????? ??????????????????');
            return false;
        }
        adIdCheck(mobon_id,name);
    });

    let duplicate_call_check = true;
    function adIdCheck(mobon_id,name){
        if(duplicate_call_check === false){
            return false
        }else{
            $.ajax({
                url: "http://cdn.megadata.co.kr/dist/config/id/"+mobon_id+".json",
                type: "get",
                cache: false,
                dataType: "json",
                data: "",
                success: function(data){
                    $('#'+name+'_id_check').html(data.hostingType);
                    setLocalStorage(name+'_id_check',data.hostingType);
                    duplicate_call_check = true;
                    return true;
                },
                error: function (request, status, error){
                    setLocalStorage(name+'_id_check','ID??????');
                    $('#'+name+'_id_check').html('ID??????');
                    alert('?????????ID??? ??????????????????');
                    duplicate_call_check = true;
                    return false;
                }
            });
        }
    }

    /**
     * cafe24 ?????? ????????????
     */
    $(document).on('click','.cafe24_btn',function (){
        $('.cafe24_btn').removeClass('active');
        $(this).addClass('active');
        $('.cafe24_tab_group').addClass('hide');
        $('#'+$(this).data('type')).removeClass('hide');
        setLocalStorage('cafe24_tab_group', $(this).data('type'));
    });

    if(getLocalStorage('cafe24_tab_group')){
        $('#'+getLocalStorage('cafe24_tab_group')+'_btn').addClass('active');
        $('#'+getLocalStorage('cafe24_tab_group')).removeClass('hide');
    }

    if(getLocalStorage('cafe24_mobon_id')){
        $("#cafe24_mobon_id").val(getLocalStorage('cafe24_mobon_id'));
    }
    if(getLocalStorage('cafe24_id_check')){
        $("#cafe24_id_check").html(getLocalStorage('cafe24_id_check'));
    }

    settingHtmlGetLocalStorage('cafe24');

    $(document).on('change','#cafe24_mobon_id',function (){
        let mobon_id = $(this).val();
        settingHtmlSetLocalStorage('cafe24',mobon_id)
    });

    /**
     * makeshop ?????? ????????????
     */
    $(document).on('click','.makeshop_btn',function (){
        $('.makeshop_btn').removeClass('active');
        $(this).addClass('active');
        $('.makeshop_tab_group').addClass('hide');
        $('#'+$(this).data('type')).removeClass('hide');
        setLocalStorage('makeshop_tab_group', $(this).data('type'));
    });

    if(getLocalStorage('makeshop_tab_group')){
        $('#'+getLocalStorage('makeshop_tab_group')+'_btn').addClass('active');
        $('#'+getLocalStorage('makeshop_tab_group')).removeClass('hide');
    }

    if(getLocalStorage('makeshop_mobon_id')){
        $("#makeshop_mobon_id").val(getLocalStorage('makeshop_mobon_id'));
    }
    if(getLocalStorage('makeshop_id_check')){
        $("#makeshop_id_check").html(getLocalStorage('makeshop_id_check'));
    }

    settingHtmlGetLocalStorage('makeshop');
    $(document).on('change','#makeshop_mobon_id',function (){
        let mobon_id = $(this).val();
        settingHtmlSetLocalStorage('makeshop',mobon_id)
    });

    /**
     * godomall_rent ?????? ????????????
     */
    $(document).on('click','.godomall_rent_btn',function (){
        $('.godomall_rent_btn').removeClass('active');
        $(this).addClass('active');
        $('.godomall_rent_tab_group').addClass('hide');
        $('#'+$(this).data('type')).removeClass('hide');
        setLocalStorage('godomall_rent_tab_group', $(this).data('type'));
    });

    if(getLocalStorage('godomall_rent_tab_group')){
        $('#'+getLocalStorage('godomall_rent_tab_group')+'_btn').addClass('active');
        $('#'+getLocalStorage('godomall_rent_tab_group')).removeClass('hide');
    }

    if(getLocalStorage('godomall_rent_mobon_id')){
        $("#godomall_rent_mobon_id").val(getLocalStorage('godomall_rent_mobon_id'));
    }
    if(getLocalStorage('godomall_rent_id_check')){
        $("#godomall_rent_id_check").html(getLocalStorage('godomall_rent_id_check'));
    }

    settingHtmlGetLocalStorage('godomall_rent');

    $(document).on('change','#godomall_rent_mobon_id',function (){
        let mobon_id = $(this).val();
        settingHtmlSetLocalStorage('godomall_rent',mobon_id)
    });

    /**
     * ????????? ?????? ????????????
     */
    $(document).on('click','.self_btn',function (){
        $('.self_btn').removeClass('active');
        $(this).addClass('active');
        $('.self_tab_group').addClass('hide');
        $('#'+$(this).data('type')).removeClass('hide');
        setLocalStorage('self_tab_group', $(this).data('type'));
    });

    if(getLocalStorage('self_tab_group')){
        $('#'+getLocalStorage('self_tab_group')+'_btn').addClass('active');
        $('#'+getLocalStorage('self_tab_group')).removeClass('hide');
    }

    if(getLocalStorage('self_mobon_id')){
        $("#self_mobon_id").val(getLocalStorage('self_mobon_id'));
    }
    if(getLocalStorage('self_id_check')){
        $("#self_id_check").html(getLocalStorage('self_id_check'));
    }

    settingHtmlGetLocalStorage('self');

    $(document).on('change','#self_mobon_id',function (){
        let mobon_id = $(this).val();
        settingHtmlSetLocalStorage('self',mobon_id)
    });

    function htmlGetLocalStorage(type){
        if(getLocalStorage(type)){
            $("#"+type+"_textarea_html").val(getLocalStorage(type));
        }
    }

    function htmlSetLocalStorage(type,mobon_id){
        let data = $('#'+type+'_textarea_origin').val().replace(/\{\{mobon_id\}\}/g,mobon_id);
        $('#'+type+'_textarea_html').val(data);
        setLocalStorage(type,data);
    }


    /**
     * ???????????? ?????? ????????????
     */
    $(document).on('change','.sno-input-box',function (){
        var insite_type = $(this).data('type');
        var sno = $(this).val();
        let replaced_str = $(".insite-textarea[data-type='"+insite_type+"']").val().replace(/\{\{sno\}\}/g, sno);
        $(".insite-textarea[data-type='"+insite_type+"_html']").val(replaced_str);


        setLocalStorage($(this).data('type')+'_val',sno);
        setLocalStorage($(this).data('type'), replaced_str);
    });
    $(document).on('click','.insite_btn',function (){
        $('.insite_btn').removeClass('active');
        $(this).addClass('active');
        $('.tab-insite').hide();
        $('#insite-'+$(this).data('type')).show();
        setLocalStorage('insite_tab_group',$(this).data('type'));
    });

    if(getLocalStorage('insite_tab_group')){
        $('#insite_'+getLocalStorage('insite_tab_group')+'_btn').addClass('active');
        $('#insite-'+getLocalStorage('insite_tab_group')).show();
    }

    function htmlGetInsiteLocalStorage(type){
        if(getLocalStorage(type)){
            $(".sno-input-box[data-type='"+type+"']").val(getLocalStorage(type+'_val'));
            $(".insite-textarea[data-type='"+type+"_html']").val(getLocalStorage(type));
        }
    }
    htmlGetInsiteLocalStorage('Main');
    htmlGetInsiteLocalStorage('breakAway');
    htmlGetInsiteLocalStorage('breakAwayFull');
    htmlGetInsiteLocalStorage('shopDetail');
    htmlGetInsiteLocalStorage('shopDetail2');
    htmlGetInsiteLocalStorage('shopDetailTogether');
    htmlGetInsiteLocalStorage('naverQuick');
    htmlGetInsiteLocalStorage('naverBacon');
    htmlGetInsiteLocalStorage('DBCollection');
    htmlGetInsiteLocalStorage('aiRecommend');
    htmlGetInsiteLocalStorage('shoppingLens');
    htmlGetInsiteLocalStorage('newTabShoppingLens');
});
function detail_mobonscript_move(){
    chrome.tabs.executeScript(null,{code:"document.getElementById('mbris_detail_section').scrollIntoView();"});
}
function together_mobonscript_move(){
    chrome.tabs.executeScript(null,{code:"document.getElementById('mbris_ar_detail_section').scrollIntoView();"});
}
function ai_mobonscript_move(){
    chrome.tabs.executeScript(null,{code:"document.getElementById('mbris_ai_detail_section').scrollIntoView();"});
}
function detail_mobonscript_check() {
    chrome.tabs.executeScript(null,
        {code:"if(document.getElementById('mbris_detail_section')){" +
                  "console.log('????????????');" +
                  "document.getElementById('mbris_detail_section').style.color = '#fff';" +
                  "document.getElementById('mbris_detail_section').style.height = '350px';" +
                  "document.getElementById('mbris_detail_section').style.lineHeight = '350px';" +
                  "document.getElementById('mbris_detail_section').style.fontSize = '50px';" +
                  "document.getElementById('mbris_detail_section').style.textAlign = 'center';" +
                  "document.getElementById('mbris_detail_section').style.backgroundColor = 'red';" +
                  "document.getElementById('mbris_detail_section').style.display = 'block';" +
                  "document.getElementById('mbris_detail_section').innerText = '????????????';" +
              "}else{" +
                  "console.log('????????????');" +
              "}"
        }
    )
}
function together_mobonscript_check() {
    chrome.tabs.executeScript(null,
        {code:" if(document.getElementById('mbris_ar_detail_section')){" +
                    "console.log('????????????');" +
                    "document.getElementById('mbris_ar_detail_section').style.color = '#fff';" +
                    "document.getElementById('mbris_ar_detail_section').style.height = '350px';" +
                    "document.getElementById('mbris_ar_detail_section').style.lineHeight = '350px';" +
                    "document.getElementById('mbris_ar_detail_section').style.fontSize = '50px';" +
                    "document.getElementById('mbris_ar_detail_section').style.textAlign = 'center';" +
                    "document.getElementById('mbris_ar_detail_section').style.backgroundColor = 'red';" +
                    "document.getElementById('mbris_ar_detail_section').style.display = 'block';" +
                    "document.getElementById('mbris_ar_detail_section').innerText = '????????????';" +
                "}else{" +
                    "console.log('????????????');" +
                "}"
        }
    )
}

function ai_mobonscript_check() {
    chrome.tabs.executeScript(null,
        {code:" if(document.getElementById('mbris_ai_detail_section')){" +
                    "console.log('AI??????');" +
                    "document.getElementById('mbris_ai_detail_section').style.color = '#fff';" +
                    "document.getElementById('mbris_ai_detail_section').style.height = '350px';" +
                    "document.getElementById('mbris_ai_detail_section').style.lineHeight = '350px';" +
                    "document.getElementById('mbris_ai_detail_section').style.fontSize = '50px';" +
                    "document.getElementById('mbris_ai_detail_section').style.textAlign = 'center';" +
                    "document.getElementById('mbris_ai_detail_section').style.backgroundColor = 'red';" +
                    "document.getElementById('mbris_ai_detail_section').style.display = 'block';" +
                    "document.getElementById('mbris_ai_detail_section').innerText = 'AI??????';" +
                "}else{" +
                    "console.log('AI??????');" +
                "}"
        }
    )
}