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
        htmlRemoveLocalStorage('shopDetailTogether');
        htmlRemoveLocalStorage('naverQuick');
        htmlRemoveLocalStorage('naverBacon');
        htmlRemoveLocalStorage('DBCollection');
        htmlRemoveLocalStorage('aiRecommend');
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
     * 복사 기능 추가
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
            alert('값을 입력해주세요.');
        }
        $('.save_popup').show().fadeOut( 'slow' );
        copyToClipboard(temp);
    })

    /**
     * cafe24 관련 스크립트
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


    htmlGetLocalStorage('cafe24_web_footer');
    htmlGetLocalStorage('cafe24_web_detail');
    htmlGetLocalStorage('cafe24_web_cart');
    htmlGetLocalStorage('cafe24_web_conversion');
    htmlGetLocalStorage('cafe24_mobile_footer');
    htmlGetLocalStorage('cafe24_mobile_detail');
    htmlGetLocalStorage('cafe24_mobile_cart');
    htmlGetLocalStorage('cafe24_mobile_conversion');

    $(document).on('change','#cafe24_mobon_id',function (){
        let mobon_id = $(this).val();

        setLocalStorage('cafe24_mobon_id',mobon_id);
        htmlSetLocalStorage('cafe24_web_footer',mobon_id);
        htmlSetLocalStorage('cafe24_web_detail',mobon_id);
        htmlSetLocalStorage('cafe24_web_cart',mobon_id);
        htmlSetLocalStorage('cafe24_web_conversion',mobon_id);
        htmlSetLocalStorage('cafe24_mobile_footer',mobon_id);
        htmlSetLocalStorage('cafe24_mobile_detail',mobon_id);
        htmlSetLocalStorage('cafe24_mobile_cart',mobon_id);
        htmlSetLocalStorage('cafe24_mobile_conversion',mobon_id);
    });

    /**
     * makeshop 관련 스크립트
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

    htmlGetLocalStorage('makeshop_web_footer');
    htmlGetLocalStorage('makeshop_web_detail');
    htmlGetLocalStorage('makeshop_web_cart');
    htmlGetLocalStorage('makeshop_web_conversion');
    htmlGetLocalStorage('makeshop_mobile_footer');
    htmlGetLocalStorage('makeshop_mobile_detail');
    htmlGetLocalStorage('makeshop_mobile_cart');
    htmlGetLocalStorage('makeshop_mobile_conversion');

    $(document).on('change','#makeshop_mobon_id',function (){
        let mobon_id = $(this).val();

        setLocalStorage('makeshop_mobon_id',mobon_id);
        htmlSetLocalStorage('makeshop_web_footer',mobon_id);
        htmlSetLocalStorage('makeshop_web_detail',mobon_id);
        htmlSetLocalStorage('makeshop_web_cart',mobon_id);
        htmlSetLocalStorage('makeshop_web_conversion',mobon_id);
        htmlSetLocalStorage('makeshop_mobile_footer',mobon_id);
        htmlSetLocalStorage('makeshop_mobile_detail',mobon_id);
        htmlSetLocalStorage('makeshop_mobile_cart',mobon_id);
        htmlSetLocalStorage('makeshop_mobile_conversion',mobon_id);
    });

    /**
     * godomall_rent 관련 스크립트
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

    htmlGetLocalStorage('godomall_rent_web_footer');
    htmlGetLocalStorage('godomall_rent_web_detail');
    htmlGetLocalStorage('godomall_rent_web_cart');
    htmlGetLocalStorage('godomall_rent_web_conversion');
    htmlGetLocalStorage('godomall_rent_mobile_footer');
    htmlGetLocalStorage('godomall_rent_mobile_detail');
    htmlGetLocalStorage('godomall_rent_mobile_cart');
    htmlGetLocalStorage('godomall_rent_mobile_conversion');

    $(document).on('change','#godomall_rent_mobon_id',function (){
        let mobon_id = $(this).val();

        setLocalStorage('godomall_rent_mobon_id',mobon_id);
        htmlSetLocalStorage('godomall_rent_web_footer',mobon_id);
        htmlSetLocalStorage('godomall_rent_web_detail',mobon_id);
        htmlSetLocalStorage('godomall_rent_web_cart',mobon_id);
        htmlSetLocalStorage('godomall_rent_web_conversion',mobon_id);
        htmlSetLocalStorage('godomall_rent_mobile_footer',mobon_id);
        htmlSetLocalStorage('godomall_rent_mobile_detail',mobon_id);
        htmlSetLocalStorage('godomall_rent_mobile_cart',mobon_id);
        htmlSetLocalStorage('godomall_rent_mobile_conversion',mobon_id);
    });


    /**
     * 독립몰 관련 스크립트
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

    htmlGetLocalStorage('self_web_footer');
    htmlGetLocalStorage('self_web_detail');
    htmlGetLocalStorage('self_web_cart');
    htmlGetLocalStorage('self_web_conversion');
    htmlGetLocalStorage('self_mobile_footer');
    htmlGetLocalStorage('self_mobile_detail');
    htmlGetLocalStorage('self_mobile_cart');
    htmlGetLocalStorage('self_mobile_conversion');

    $(document).on('change','#self_mobon_id',function (){
        let mobon_id = $(this).val();

        setLocalStorage('self_mobon_id',mobon_id);
        htmlSetLocalStorage('self_web_footer',mobon_id);
        htmlSetLocalStorage('self_web_detail',mobon_id);
        htmlSetLocalStorage('self_web_cart',mobon_id);
        htmlSetLocalStorage('self_web_conversion',mobon_id);
        htmlSetLocalStorage('self_mobile_footer',mobon_id);
        htmlSetLocalStorage('self_mobile_detail',mobon_id);
        htmlSetLocalStorage('self_mobile_cart',mobon_id);
        htmlSetLocalStorage('self_mobile_conversion',mobon_id);
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
     * 인사이트 관련 스크립트
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
    htmlGetInsiteLocalStorage('shopDetailTogether');
    htmlGetInsiteLocalStorage('naverQuick');
    htmlGetInsiteLocalStorage('naverBacon');
    htmlGetInsiteLocalStorage('DBCollection');
    htmlGetInsiteLocalStorage('aiRecommend');
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
                  "console.log('상세있음');" +
                  "document.getElementById('mbris_detail_section').style.color = '#fff';" +
                  "document.getElementById('mbris_detail_section').style.height = '350px';" +
                  "document.getElementById('mbris_detail_section').style.lineHeight = '350px';" +
                  "document.getElementById('mbris_detail_section').style.fontSize = '50px';" +
                  "document.getElementById('mbris_detail_section').style.textAlign = 'center';" +
                  "document.getElementById('mbris_detail_section').style.backgroundColor = 'red';" +
                  "document.getElementById('mbris_detail_section').style.display = 'block';" +
                  "document.getElementById('mbris_detail_section').innerText = '상세확인';" +
              "}else{" +
                  "console.log('상세없음');" +
              "}"
        }
    )
}
function together_mobonscript_check() {
    chrome.tabs.executeScript(null,
        {code:" if(document.getElementById('mbris_ar_detail_section')){" +
                    "console.log('같이있음');" +
                    "document.getElementById('mbris_ar_detail_section').style.color = '#fff';" +
                    "document.getElementById('mbris_ar_detail_section').style.height = '350px';" +
                    "document.getElementById('mbris_ar_detail_section').style.lineHeight = '350px';" +
                    "document.getElementById('mbris_ar_detail_section').style.fontSize = '50px';" +
                    "document.getElementById('mbris_ar_detail_section').style.textAlign = 'center';" +
                    "document.getElementById('mbris_ar_detail_section').style.backgroundColor = 'red';" +
                    "document.getElementById('mbris_ar_detail_section').style.display = 'block';" +
                    "document.getElementById('mbris_ar_detail_section').innerText = '같이확인';" +
                "}else{" +
                    "console.log('같이없음');" +
                "}"
        }
    )
}

function ai_mobonscript_check() {
    chrome.tabs.executeScript(null,
        {code:" if(document.getElementById('mbris_ai_detail_section')){" +
                    "console.log('AI있음');" +
                    "document.getElementById('mbris_ai_detail_section').style.color = '#fff';" +
                    "document.getElementById('mbris_ai_detail_section').style.height = '350px';" +
                    "document.getElementById('mbris_ai_detail_section').style.lineHeight = '350px';" +
                    "document.getElementById('mbris_ai_detail_section').style.fontSize = '50px';" +
                    "document.getElementById('mbris_ai_detail_section').style.textAlign = 'center';" +
                    "document.getElementById('mbris_ai_detail_section').style.backgroundColor = 'red';" +
                    "document.getElementById('mbris_ai_detail_section').style.display = 'block';" +
                    "document.getElementById('mbris_ai_detail_section').innerText = 'AI확인';" +
                "}else{" +
                    "console.log('AI없음');" +
                "}"
        }
    )
}