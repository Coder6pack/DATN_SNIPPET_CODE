<?php

namespace App\Repositories\Img;

use App\Models\Img;
use App\Repositories\BaseRepository;
use App\Repositories\Img\ImgRepositoryInterface;
class ImgRepository extends BaseRepository implements ImgRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    protected $model;

    /**
     * {@inheritdoc}
     */
    public function __construct(Img $model)
    {
        $this->model = $model;
        parent::__construct($model);
    }

    public function getForeign()
    {
        return $this->model->get();
    }

    public function deleteImg($id)
    {
        $imgs = $this->model->where($id)->first();

        return $this->destroy($imgs);
    }
}
