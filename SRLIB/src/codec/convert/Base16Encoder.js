/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/// @Copyright ~2015 Samlv9 and other contributors.
/// @MIT-LICENSE | dev-1.0.0 | http://samlv9.com/
/// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
///                                              }|
///                                              }|
///                                              }|     　 へ　　　 ／|    
///      _______     _______         ______      }|      /　│　　 ／ ／
///     /  ___  |   |_   __ \      .' ____ '.    }|     │　Z ＿,＜　／　　 /`ヽ
///    |  (__ \_|     | |__) |     | (____) |    }|     │　　　　　ヽ　　 /　　〉
///     '.___`-.      |  __ /      '_.____. |    }|      Y　　　　　`　 /　　/
///    |`\____) |    _| |  \ \_    | \____| |    }|    ｲ●　､　●　　⊂⊃〈　　/
///    |_______.'   |____| |___|    \______,'    }|    ()　 v　　　　|　＼〈
///    |=========================================\|    　>ｰ ､_　 ィ　 │ ／／
///    | LESS IS MORE!                           ||     / へ　　 /　ﾉ＜|＼＼
///    `=========================================/|    ヽ_ﾉ　　(_／　 │／／
///                                              }|     7　　　　　　  |／
///                                              }|     ＞―r￣￣`ｰ―＿`
///                                              }|
///                                              }|
/// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
/// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
/// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
/// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
/// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
/// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
/// THE SOFTWARE.


/// <var type='Array'>
/// 定义 BASE16 字符字典。</var>
var BASE16_ENCODE_TABLE = [
    '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
];


/// <var type='Array'>
/// 定义 BASE16 码位字典。</var>
var BASE16_DECODE_TABLE = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, /*[48-57]*/
    -1, -1, -1, -1, -1, -1, -1,   /*[58-64]*/
    10, 11, 12, 13, 14, 15        /*[65-70]*/
];


function Base16Encoder() {
    /// <summary>
    /// 以 BASE16 格式对数据进行编码/解码。</summary>

    throw new Error("无法创建静态类型的实例。");
}


Base16Encoder.encode = function encode( block ) {
    /// <summary>
    /// 将数据以 BASE16 格式进行编码。</summary>
    /// <param name='block' type='Uint8Array'>
    /// 必须，指定需要编码的数据。</param>
    /// <returns type='String'>
    /// 返回一个 BASE16 格式的字符串。</returns>

    var buffer = 0;
    var output = "";
    
    for ( var i = 0, len = block.length; i < len; ++i ) {
        buffer = block[i];

        output += BASE16_ENCODE_TABLE[buffer >>> 4];
        output += BASE16_ENCODE_TABLE[buffer & 0xF];
    }

    return output;
}


Base16Encoder.decode = function decode( input ) {
    /// <summary>
    /// 将字符串以 BASE16 格式进行解码。</summary>
    /// <param name='input' type='String'>
    /// 必须，指定被解码的 BASE16 字符串。</param>
    /// <returns type='Uint8Array'>
    /// 返回一个 Uint8Array 类型的数组。</returns>

    if ( input.length & 1 ) {
        /// 如果输入长度是一个奇数，则将输入字符串视为一个无效的 BASE16 字符串。

        throw new Error("无效的 BASE16 字符串。");
    }

    var head   = 0;
    var trail  = 0;
    var output = new Uint8Array(input.length >>> 1);

    for ( var i = 0, j = 0, len = input.length; i < len; i += 2, ++j ) {
        head  = input.charAt(i);
        trail = input.charAt(i + 1);

        if ( head  < 48 || head  > 70 || (head  > 57 && head  < 65) ||
             trail < 48 || trail > 70 || (trail > 57 && trail < 65) ) {

            throw new Error("遇到意外的字符。head=\"" + head + "\"， trail=\"" + trail + "\"。");
        }

        output[j] = (BASE16_DECODE_TABLE[head  - 48] << 4) 
                  | (BASE16_DECODE_TABLE[trail - 48]);
    }

    return output;
}