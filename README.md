# nri4-api-solo

API ソロプロジェクト

## データ情報

### Tasks テーブル

| key     | value        |
| :------ | :----------- |
| `id`    | 一意の ID    |
| `title` | タスクの名前 |

## エンドポイント情報

| endpoint            | request params | way to use |
| :------------------ | :------------- | :--------- |
| GET `/tasks/`       | ---            | 一覧取得   |
| POST `/tasks/`      | `id`, `title`  | 登録       |
| PATCH `/tasks/:id`  | `title`        | 修正       |
| DELETE `/tasks/:id` | ---            | 削除       |
