// This file is auto-generated by the "tsproxygen.exe" tool. Manual modification is not recommended.
import type EwsProxyRequestParameters from '../contract/EwsProxyRequestParameters';

export default function ewsProxyRequestParameters(
    data: EwsProxyRequestParameters
): EwsProxyRequestParameters {
    let result: EwsProxyRequestParameters = {
        __type: 'EwsProxyRequestParameters:#Exchange',
        ...data,
    };

    return result;
}